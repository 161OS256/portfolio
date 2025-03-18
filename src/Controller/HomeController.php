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
        $translatedText = $translator->trans('hello');

        // Tablica projektów puzniej pociącnę to z bazy
        $projects = [
            'project1' => [
                'name' => $translator->trans('project-01.title'),
                'description' => $translator->trans('project-01.description'),
                'src' => 'img/project-01.png', // Ścieżka do obrazka w public/img/
                'route' => 'pascal',
            ],
            'project2' => [
                'name' => $translator->trans('project-01.title'),
                'description' => $translator->trans('project-02.description'),
                'src' => 'img/project-01.png',
                'route' => 'pascal',
            ],
            'project3' => [
                'name' => $translator->trans('project-01.title'),
                'description' => $translator->trans('project-03.description'),
                'src' => 'img/project-01.png',
                'route' => 'pascal',
            ],
        ];

        // Przekazanie do szablonu
        return $this->render('home/index.html.twig', [
            'message' => $translatedText,
            'current_locale' => $_locale,
            'projects' => $projects, // Dodajemy projekty
        ]);
    }
}
