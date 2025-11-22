# -----------------------------------------
# DOCKERFILE UNTUK LARAVEL DI RENDER
# -----------------------------------------

FROM php:8.2-fpm

# Install dependencies Laravel
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libpq-dev \
    libonig-dev \
    && docker-php-ext-install pdo pdo_pgsql

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory (ini penting!)
WORKDIR /var/www/html

# Copy backend Laravel ke working directory
COPY ./umkm-backend /var/www/html

# Install dependency Laravel
RUN composer install --no-dev --optimize-autoloader

# Generate APP_KEY jika belum
RUN php artisan key:generate --force || true

# Expose port Laravel
EXPOSE 10000

# Jalankan Laravel server
CMD php artisan serve --host=0.0.0.0 --port=10000
