<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeheatingController extends AbstractController
{
    #[Route('/{_locale}/home-heating', name: 'home-heating_index', requirements: ['_locale' => 'en|pl'])]
    public function index(string $_locale): Response
    {
        return $this->render('home-heating/index.html.twig', [
            'controller_name' => 'home-heatingController',
            'current_locale' => $_locale,
            'site' => 'pascal',
        ]);
    }
}
