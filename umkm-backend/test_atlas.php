<?php
require 'vendor/autoload.php';

try {
    $uri = "mongodb+srv://Aldi:Aldi12345@cluster0.yezc2.mongodb.net/?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true";
    $client = new MongoDB\Client($uri);

    $collection = $client->testdb->users;

    $result = $collection->insertOne([
        'name' => 'Aldi',
        'status' => 'Connected to MongoDB Atlas!',
        'time' => date('Y-m-d H:i:s')
    ]);

    echo "✅ Koneksi berhasil! Inserted ID: " . $result->getInsertedId() . PHP_EOL;

} catch (Exception $e) {
    echo "❌ Gagal konek: " . $e->getMessage() . PHP_EOL;
}
