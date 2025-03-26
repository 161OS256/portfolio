<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class WorkcontrollController extends AbstractController
{
    #[Route('/{_locale}/workcontroll', name: 'workcontroll_index', requirements: ['_locale' => 'en|pl'])]
    public function index(string $_locale): Response
    {
        return $this->render('workcontroll/index.html.twig', [
            'controller_name' => 'WorkcontrollController',
            'current_locale' => $_locale,
            'site' => 'workcontroll',
        ]);
    }
}
