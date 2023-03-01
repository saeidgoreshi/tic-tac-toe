﻿

/****** Object:  Database [tictactoe]    Script Date: 2023-03-01 9:03:42 AM ******/
CREATE DATABASE [tictactoe]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'tictactoe', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\tictactoe.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'tictactoe_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\tictactoe_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [tictactoe].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [tictactoe] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [tictactoe] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [tictactoe] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [tictactoe] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [tictactoe] SET ARITHABORT OFF 
GO

ALTER DATABASE [tictactoe] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [tictactoe] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [tictactoe] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [tictactoe] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [tictactoe] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [tictactoe] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [tictactoe] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [tictactoe] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [tictactoe] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [tictactoe] SET  DISABLE_BROKER 
GO

ALTER DATABASE [tictactoe] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [tictactoe] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [tictactoe] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [tictactoe] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [tictactoe] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [tictactoe] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [tictactoe] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [tictactoe] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [tictactoe] SET  MULTI_USER 
GO

ALTER DATABASE [tictactoe] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [tictactoe] SET DB_CHAINING OFF 
GO

ALTER DATABASE [tictactoe] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [tictactoe] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [tictactoe] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [tictactoe] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [tictactoe] SET QUERY_STORE = OFF
GO

ALTER DATABASE [tictactoe] SET  READ_WRITE 
GO

