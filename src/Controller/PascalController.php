<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class PascalController extends AbstractController
{
    #[Route('/{_locale}/pascal', name: 'pascal_index', requirements: ['_locale' => 'en|pl'])]
    public function index(string $_locale): Response
    {
        return $this->render('pascal/index.html.twig', [
            'controller_name' => 'PascalController',
            'current_locale' => $_locale,
            'site' => 'pascal',
        ]);
    }
}
