<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\VarDumper\Cloner\AbstractCloner;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Request;



class HomeController extends AbstractController
{
    #[Route('/{_locale}', name: 'home_index', requirements: ['_locale' => 'en|pl'])]
    public function index(TranslatorInterface $translator, Request $request, string $_locale): Response
    {
        // Zapisz język w sesji
        $request->getSession()->set('_locale', $_locale);

        // Ustaw język aplikacji
        $request->setLocale($_locale);

        // Tłumaczenie
        $translatedText = $translator->trans('hello');
        
        // Przekazanie danych do szablonu
        return $this->render('home/index.html.twig', [
            'message' => $translatedText,
            'current_locale' => $_locale,
        ]);
    }
}