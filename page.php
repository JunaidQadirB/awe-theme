<?php

use Timber\Timber;

$context         = Timber::get_context();
$context['post'] = Timber::query_post();
Timber::render( 'pages/page.twig', $context );