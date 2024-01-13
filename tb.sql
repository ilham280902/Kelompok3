-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2024 at 11:40 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tb`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `harga`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(5, 'Seagate BarraCuda 1TB Hardisk', 'Form Factor: 3.5Inch Interface: SATA 6Gb/s Transfer Data Rate: Up to 156MB/s Speed : 7200RPM Cache: 64MB', 'Rp840.000', 'c8930bd46bcfa97cbe53d920bac274b1.jpg', 'http://localhost:3000/images/c8930bd46bcfa97cbe53d920bac274b1.jpg', '2024-01-10 09:37:45', '2024-01-11 13:31:40'),
(8, 'Gamepad Wireless REXUS Gladius GX100 white', 'Didukung fitur Turbo yang mengoptimalkan aksi Anda saat bermain game. Dilengkapi driver software untuk mengoneksikan konsol dengan perangkat terdukung.', 'Rp265.000', '9e6c6f4198443b1e14dc7a583e428c29.jpg', 'http://localhost:3000/images/9e6c6f4198443b1e14dc7a583e428c29.jpg', '2024-01-11 08:46:50', '2024-01-11 13:34:17'),
(9, 'KOORUI 34E6UC Curved Gaming Monitor 21:9', 'Screen size: 34 inches Special function: Curved surface Refresh frequency: 165Hz Aspect ratio: 21:9 Product size: 24.2D × 79.7W × 53.5H cm', 'Rp4.490.000', '0897f1a16d6a49a9f2274feb0e1c0d89.jpg', 'http://localhost:3000/images/0897f1a16d6a49a9f2274feb0e1c0d89.jpg', '2024-01-11 13:36:30', '2024-01-11 13:36:30'),
(10, 'FANTECH MAXFIT 61 MK857 Mechanical Gaming Keyboard', '- 60% KEYBOARD LAYOUT (61 Tombol) - HOT-SWAPPABLE (Support up to 5 pin Switches) - Outemu Switch Bawaan (Blue Switch, Red Switch)', 'Rp449.000', 'b27745bc245027616b56e72c257dbf48.jpg', 'http://localhost:3000/images/b27745bc245027616b56e72c257dbf48.jpg', '2024-01-11 13:39:28', '2024-01-11 13:39:56'),
(11, 'LOGITECH G304 Lightspeed Mouse Gaming Wireless', 'ISI KEMASAN G304 Gaming Mouse Receiver USB LIGHTSPEED™ Dokumentasi pengguna  DAYA TAHAN BATERAI 250 jam', 'Rp509.000', '08919e85f42256e30cadb9d336c9e933.jpeg', 'http://localhost:3000/images/08919e85f42256e30cadb9d336c9e933.jpeg', '2024-01-11 13:41:20', '2024-01-11 13:41:20'),
(12, 'RAM DDR4 16GB Kingston Fury Renegade RGB', 'Memory Capacity : 16GB Kit (8GB x2) Module Quantity : 2 Modules Speed : 3200MHz (PC4-25600) Error Check : Non-ECC Model/Series/Type : Fury Beast Module Type : DIMM', 'Rp959.000', '891462b2cff4b92bb7e5b3978f26d4eb.jpeg', 'http://localhost:3000/images/891462b2cff4b92bb7e5b3978f26d4eb.jpeg', '2024-01-11 13:43:01', '2024-01-11 13:43:01'),
(13, 'Cooling Pad Laptop 5 Fan Notebook K5', 'Technical Specifications Dimension: 350 x 300 x 38 mm Fan Speed: 1400 RPM Fit Laptop: 12 - 15.6 inch', 'Rp170.000', '1e43cf44ffdfaec57b62b14eb0688c44.jpeg', 'http://localhost:3000/images/1e43cf44ffdfaec57b62b14eb0688c44.jpeg', '2024-01-11 13:44:31', '2024-01-11 13:44:31'),
(14, 'SSD Solid State Drive V-GeN 128GB SATA 3', 'Kapasitas : 128GB Dimensi : 100 x 70 x 6 mm Speed : Read up to 550Mbps; Write up to 477Mbps Interface : SATA 3 - 6GB/s Form Factor : 2.5 inch Type : Internal Storage Supported : UDMA Mode 6', 'Rp193.000', '988630084602d68535cebb189f5a1141.jpeg', 'http://localhost:3000/images/988630084602d68535cebb189f5a1141.jpeg', '2024-01-11 13:45:30', '2024-01-13 01:57:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'MOHAMAD ILHAM SEPTIANTO', 'jatibarang987@gmail.com', '$2b$10$IQEBi902t/cehJ6XL0MEmOaGktJQ53gXPj/iTzvQffDAsov/zXC5K', '2024-01-10 09:17:44', '2024-01-10 09:17:44'),
(2, 'Christo', 'christo12@gmail.com', '$2b$10$YQzdn699QrZQR2oQCzH1FeoSNRSO2alSuN9yHEZdqfSCv5zNOkyNC', '2024-01-11 13:46:21', '2024-01-11 13:46:21'),
(3, 'Rizky', 'rizky1@gmail.com', '$2b$10$AxEU4XvoWii9/pbV/QA6v.LbQ9kUhVU9Km14wzRtXPZhl/MvUkD92', '2024-01-11 13:46:41', '2024-01-11 13:46:41'),
(4, 'Naufal', 'naufal2@gmail.com', '$2b$10$cNnUf6Kzut/ZxVwKqS9L2.XQDLHtADD8T3BpJ7fzVhgDZ0y/WSjfm', '2024-01-11 13:46:59', '2024-01-11 13:46:59'),
(5, 'ilham', 'ilham@gmail.com', '$2b$10$WJG9jGCAq9jfDnmtDnmUZOK1/E8EZCDgaevbqqi8xDYbw480t5B46', '2024-01-13 04:24:42', '2024-01-13 04:24:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
