<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class WorkorganizerController extends AbstractController
{
    #[Route('/{_locale}/workorganizer', name: 'workorganizer_index', requirements: ['_locale' => 'en|pl'])]
    public function index(string $_locale): Response
    {
        return $this->render('workorganizer/index.html.twig', [
            'controller_name' => 'WorkorganizerController',
            'current_locale' => $_locale,
            'site' => 'workorganizer',
        ]);
    }
}
