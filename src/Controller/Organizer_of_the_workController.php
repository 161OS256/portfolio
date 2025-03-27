<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class Organizer_of_the_workController extends AbstractController
{
    #[Route('/{_locale}/organizer_of_the_work', name: 'organizer_of_the_work_index', requirements: ['_locale' => 'en|pl'])]
    public function index(string $_locale): Response
    {
        return $this->render('organizer-of-the-work/index.html.twig', [
            'controller_name' => 'organizer_of_the_workController',
            'current_locale' => $_locale,
            'site' => 'organizer_of_the_work',
        ]);
    }
}
