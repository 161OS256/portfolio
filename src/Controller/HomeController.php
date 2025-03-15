<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\VarDumper\Cloner\AbstractCloner;

class HomeController extends AbstractController {

    #[Route('/')]
    public function index(): Response {
        return $this->render('home/index.html.twig');

    }
}