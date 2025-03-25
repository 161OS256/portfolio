<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class SliderController extends AbstractController
{
    #[Route('/{_locale}/slider/{id}', name: 'slider_index', requirements: ['_locale' => 'en|pl'])]
    public function index(string $_locale, int $id): Response
    {
        
        return $this->render('slider/index.html.twig', [
            'controller_name' => 'SliderController',
            'current_locale' => $_locale,
            'site' => 'slider',
            'id' => $id,
        ]);
    }
}
