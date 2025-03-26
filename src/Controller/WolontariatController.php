<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class WolontariatController extends AbstractController
{
    #[Route('/{_locale}/wolontariat', name: 'wolontariat_index', requirements: ['_locale' => 'en|pl'])]
    public function index(string $_locale): Response
    {
        return $this->render('wolontariat/index.html.twig', [
            'controller_name' => 'WolontariatController',
            'current_locale' => $_locale,
            'site' => 'wolontariat',
        ]);
    }
}
