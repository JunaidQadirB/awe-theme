<?php

use Timber\Timber;

$context                = Timber::get_context();
$search_term            = get_search_query();
$context['title']       = 'Search results for ' . $search_term;
$context['posts']       = new \Timber\PostQuery();
$context['search_term'] = $search_term;

Timber::render( 'pages/search.twig', $context );
