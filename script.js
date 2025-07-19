<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Premium Swag</title>
    <link rel="icon" href="favicon.ico" />

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

    <!-- External CSS -->
    <link rel="stylesheet" href="style.css" />
</head>
<body class="text-gray-800">
    <header class="bg-white shadow-md sticky top-0 z-40">
        <nav class="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
            <a href="#home" class="text-xl font-orbitron font-bold text-black">Premium Swag</a>
            <div class="hidden md:flex items-center space-x-4" id="desktop-menu"></div>
            <div class="flex items-center space-x-2">
                <button id="search-btn" class="text-gray-600 hover:text-teal-500 p-1">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <a href="#cart" class="relative text-gray-600 hover:text-teal-500 p-1">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span id="cart-count" class="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </a>
                <button id="mobile-menu-button" class="md:hidden text-gray-600 p-1">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
        <div id="mobile-menu" class="hidden md:hidden bg-white"></div>
    </header>

    <main class="container mx-auto px-4 sm:px-6 py-12">
        <h1 class="text-3xl font-bold text-center mb-10">All Products</h1>
        <div id="product-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            <!-- Products will be rendered here -->
        </div>
    </main>

    <footer class="bg-gray-800 text-white py-6 mt-16">
        <div class="container mx-auto px-6 text-center">
            <p class="text-sm">&copy; <span id="year"></span> Premium Swag. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- External JS -->
    <script src="script.js" defer></script>
</body>
</html>
