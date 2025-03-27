<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Request;

class HomeController extends AbstractController
{
    #[Route('/{_locale}', name: 'home_index', requirements: ['_locale' => 'en|pl'])]
    public function index(TranslatorInterface $translator, Request $request, string $_locale): Response
    {
        // Zapisz język w sesji
        $request->getSession()->set('_locale', $_locale);
        $request->setLocale($_locale);

        // Tłumaczenie
        $translatedText = $translator->trans('repo');

        // Tablica projektów puzniej pociącnę to z bazy gdy będzie więcej projektów
        $projects = [
            'homeheating' => [
                'route' => 'Home-heating',
                'using' => 'Pascal, HTML, CSS, JavaScript',
            ],
            'organizerofthework' => [
                'route' => 'organizer-of-the-work',
                'using' => 'PHP, HTML, CSS, JavaScript, MySql',
            ],
            'volunteerassociation' => [
                'route' => 'volunteer-association',
                'using' => 'PHP, HTML, CSS, JavaScript, MySql',
            ],
            'monitoringwhewatchmanswork' => [
                'route' => 'monitoring-whe-watchmans-work',
                'using' => 'Pascal, HTML, CSS',
            ],
            'informationaboutthissite' => [
                'route' => 'information-about-this-site',
                'using' => 'Symfony',
            ],

        ];

        // Przekazanie do szablonu
        return $this->render('home/index.html.twig', [
            'message' => $translatedText,
            'current_locale' => $_locale,
            'projects' => $projects, // Dodajemy projekty
            'site' => '',
        ]);
    }
}
