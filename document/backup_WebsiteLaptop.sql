USE [master]
GO
/****** Object:  Database [WebsiteLaptop]    Script Date: 21/4/2022 03:44:26 ******/
CREATE DATABASE [WebsiteLaptop]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WebsiteLaptop', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\WebsiteLaptop.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'WebsiteLaptop_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\WebsiteLaptop_log.ldf' , SIZE = 3456KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [WebsiteLaptop] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WebsiteLaptop].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WebsiteLaptop] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET ARITHABORT OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [WebsiteLaptop] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WebsiteLaptop] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WebsiteLaptop] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET  DISABLE_BROKER 
GO
ALTER DATABASE [WebsiteLaptop] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WebsiteLaptop] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [WebsiteLaptop] SET  MULTI_USER 
GO
ALTER DATABASE [WebsiteLaptop] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WebsiteLaptop] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WebsiteLaptop] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WebsiteLaptop] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [WebsiteLaptop]
GO
/****** Object:  FullTextCatalog [searchNameProduct]    Script Date: 21/4/2022 03:44:26 ******/
CREATE FULLTEXT CATALOG [searchNameProduct]WITH ACCENT_SENSITIVITY = ON

GO
/****** Object:  StoredProcedure [dbo].[getBanerAll]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getBanerAll]
as
select  id,name,imgDesktop,urlImgDesktop,imgTablet,urlImgTablet,imgMobile,urlImgMobile,url,contentUrrl,detail1,detail2
from Banner 
where status=1
order by orders
GO
/****** Object:  StoredProcedure [dbo].[getBrandIDandParentID]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getBrandIDandParentID]
as 
select brandID, parentID, name
from brand
where status=1
GO
/****** Object:  StoredProcedure [dbo].[getBrandSuggestion]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getBrandSuggestion] 
as 
select brandID,  avatar, urlImage
from Brand 
where status=1 and parentID ='0'
GO
/****** Object:  StoredProcedure [dbo].[getParentByBrandId]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getParentByBrandId]
@parentId varchar(6)
as 
select brandID, parentID, name
from Brand 
where status=1 and parentID =@parentId
GO
/****** Object:  StoredProcedure [dbo].[getProductAll]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getProductAll]
as 
select ProductID, name, brandID,price, priceSale , urlImage, avatar
from product 
where status =1

GO
/****** Object:  StoredProcedure [dbo].[getProductByBrandID]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getProductByBrandID]
@brandId varchar(6)
as
select ProductID, name, brandID,price, priceSale , urlImage, avatar
from Product 
where status =1 and BrandId = @brandId
GO
/****** Object:  StoredProcedure [dbo].[getSearchProductExact]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getSearchProductExact]
@x nvarchar(300)
as
select ProductID, name, price, priceSale, urlImage, avatar 
from Product
where status =1 and name= @x
GO
/****** Object:  StoredProcedure [dbo].[getSearchProductFREETEXT]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getSearchProductFREETEXT]
@x nvarchar(300)
as
select ProductID, name, price, priceSale, urlImage, avatar 
from Product
where status =1 and FREETEXT(name,@x);
GO
/****** Object:  StoredProcedure [dbo].[getSearchProductLike]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getSearchProductLike]
@x nvarchar(300)
as
select ProductID, name, price, priceSale, urlImage, avatar 
from Product
where status =1 and name like N'%'+@x+'%'
GO
/****** Object:  StoredProcedure [dbo].[getTopNewProduct]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getTopNewProduct]
@top int
as
select top(@top) ProductID, name, price, priceSale, avatar, urlImage
from Product 
where status=1
order by createdDate desc
GO
/****** Object:  StoredProcedure [dbo].[postCreateUsser]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[postCreateUsser]
@email nvarchar(200),
@password nvarchar(100),
@lastName nvarchar(50),
@fristName nvarchar(100),
@status int,
@access int, 
@createdDate datetime,
@createdBy int
as 
INSERT INTO users( email, password,lastName,fristName,status,access,createdDate,createdBy) 
values( @email, @password, @lastName, @fristName, @status, @access, @createdDate, @createdBy )
GO
/****** Object:  StoredProcedure [dbo].[postLoginUser]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create proc [dbo].[postLoginUser]
 @email nvarchar(200),
 @password nvarchar(100)
 as
 select us.userID,  us.lastName, us.fristName, us.avatar, us.access, us.urlImage
 from users us
 where us.status=1 and us.email=@email and us.password= @password
GO
/****** Object:  Table [dbo].[Banner]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Banner](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[imgDesktop] [nvarchar](200) NULL,
	[urlImgDesktop] [nvarchar](200) NULL,
	[imgTablet] [nvarchar](200) NULL,
	[urlImgTablet] [nvarchar](200) NULL,
	[imgMobile] [nvarchar](200) NULL,
	[urlImgMobile] [nvarchar](200) NULL,
	[url] [nvarchar](200) NULL,
	[contentUrrl] [nvarchar](50) NULL,
	[detail1] [nvarchar](200) NULL,
	[detail2] [nvarchar](100) NULL,
	[status] [nvarchar](100) NULL,
	[orders] [int] NULL,
 CONSTRAINT [PK_Banner] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Brand]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Brand](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[brandID] [nvarchar](6) NOT NULL,
	[parentID] [nvarchar](6) NULL,
	[name] [nvarchar](200) NULL,
	[avatar] [nvarchar](max) NULL,
	[urlImage] [nvarchar](max) NULL,
	[slug] [nvarchar](max) NULL,
	[status] [int] NULL,
	[createdDate] [datetime] NULL,
	[createdBy] [int] NULL,
	[updatedDate] [datetime] NULL,
	[updatedBy] [int] NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Category]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Category](
	[stt] [int] IDENTITY(1,1) NOT NULL,
	[categoryID] [varchar](10) NULL,
	[name] [nvarchar](70) NULL,
	[slug] [nvarchar](max) NULL,
	[status] [int] NULL,
	[createdDate] [datetime] NULL,
	[createdBy] [int] NULL,
	[updatedDate] [datetime] NULL,
	[updatedBy] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Image]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[ImageID] [nvarchar](20) NOT NULL,
	[avatar] [nvarchar](max) NULL,
	[url] [nvarchar](max) NULL,
	[status] [int] NULL,
 CONSTRAINT [PK_Image] PRIMARY KEY CLUSTERED 
(
	[ImageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[mapping_Product_to_Category]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[mapping_Product_to_Category](
	[productID] [varchar](10) NOT NULL,
	[categoryID] [varchar](10) NOT NULL,
	[status] [int] NOT NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[mapping_Product_to_Image]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[mapping_Product_to_Image](
	[ImageID] [varchar](50) NOT NULL,
	[ProductID] [varchar](50) NULL,
	[status] [int] NULL,
 CONSTRAINT [PK_mapping_Product_to_Image] PRIMARY KEY CLUSTERED 
(
	[ImageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Product]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Product](
	[stt] [int] IDENTITY(1,1) NOT NULL,
	[ProductID] [varchar](10) NOT NULL,
	[name] [nvarchar](200) NOT NULL,
	[price] [int] NOT NULL,
	[priceSale] [int] NULL,
	[avatar] [nvarchar](1000) NULL,
	[urlImage] [nvarchar](4000) NULL,
	[brandID] [varchar](6) NOT NULL,
	[slug] [nvarchar](300) NULL,
	[shortDes] [nvarchar](1000) NULL,
	[fullDes] [nvarchar](4000) NULL,
	[status] [int] NULL,
	[createdDate] [datetime] NULL,
	[createdBy] [int] NULL,
	[updatedDate] [datetime] NULL,
	[updatedBy] [int] NULL,
	[amount] [int] NULL,
 CONSTRAINT [PK_Product_1] PRIMARY KEY CLUSTERED 
(
	[stt] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[userDetail]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[userDetail](
	[userID] [int] NOT NULL,
	[phone] [nvarchar](15) NULL,
	[address] [nvarchar](max) NULL,
	[dateOfBirth] [datetime] NULL,
 CONSTRAINT [PK_userDetail] PRIMARY KEY CLUSTERED 
(
	[userID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[users]    Script Date: 21/4/2022 03:44:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[userID] [int] IDENTITY(1,1) NOT NULL,
	[email] [nvarchar](200) NULL,
	[password] [nvarchar](100) NULL,
	[lastName] [nvarchar](50) NULL,
	[fristName] [nvarchar](100) NULL,
	[status] [int] NOT NULL,
	[avatar] [nvarchar](200) NULL,
	[urlImage] [nvarchar](300) NULL,
	[access] [int] NULL,
	[createdDate] [datetime] NULL,
	[createdBy] [int] NULL,
	[updatedDate] [datetime] NULL,
	[updatedBy] [int] NULL,
 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[userID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Banner] ON 

INSERT [dbo].[Banner] ([id], [name], [imgDesktop], [urlImgDesktop], [imgTablet], [urlImgTablet], [imgMobile], [urlImgMobile], [url], [contentUrrl], [detail1], [detail2], [status], [orders]) VALUES (1, N'banner 2', N'bckg-2.jpg', N'asset/img/banner/test/', N'bckg-2-sm.jpg', N'asset/img/banner/test/', N'bckg-2-xs.jpg', N'asset/img/banner/test/', N'/product', N'xem nhiều laptop hơn', N'cung cấp trọng lượng nhẹ và mạnh mẽ', N'máy tính xách tay mới tuyệt vời', N'1', 10)
INSERT [dbo].[Banner] ([id], [name], [imgDesktop], [urlImgDesktop], [imgTablet], [urlImgTablet], [imgMobile], [urlImgMobile], [url], [contentUrrl], [detail1], [detail2], [status], [orders]) VALUES (2, N'banner 2', N'bckg-1.jpg', N'asset/img/banner/test/', N'bckg-1-sm.jpg', N'asset/img/banner/test/', N'bckg-1-xs.jpg', N'asset/img/banner/test/', N'/product', N'xem sản phẩm', N'thiết bị được thiết kế cho những người sáng tạo', N'apple imac 27 retina', N'1', 1)
INSERT [dbo].[Banner] ([id], [name], [imgDesktop], [urlImgDesktop], [imgTablet], [urlImgTablet], [imgMobile], [urlImgMobile], [url], [contentUrrl], [detail1], [detail2], [status], [orders]) VALUES (3, N'banner 3', N'bckg-3.jpg', N'asset/img/banner/test/', N'bckg-3-sm.jpg', N'asset/img/banner/test/', N'bckg-3-xs.jpg', N'asset/img/banner/test/', N'/product', N'xem bài viết', N'đồng hồ sang trọng, máy tính bảng dành cho doanh nhân và cảm ứng 3D: Cách Apple lên kế hoạch dẫn đầu trong lĩnh vực di động.', N'ngày mới cho doanh nghiệp', N'1', 5)
INSERT [dbo].[Banner] ([id], [name], [imgDesktop], [urlImgDesktop], [imgTablet], [urlImgTablet], [imgMobile], [urlImgMobile], [url], [contentUrrl], [detail1], [detail2], [status], [orders]) VALUES (4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'0', NULL)
SET IDENTITY_INSERT [dbo].[Banner] OFF
SET IDENTITY_INSERT [dbo].[Brand] ON 

INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (1, N'AP5', N'0', N'Laptop Apple ', N'apple.png', N'asset\img\logoBrand\AP5\', N'laptop-apple', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (2, N'AS1', N'0', N'Laptop Asus', N'ASUS_Logo.png', N'asset/img/logoBrand/AS1/', N'laptop-asus', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (3, N'DE2', N'0', N'Latop Dell', N'dell.png', N'asset/img/logoBrand/DE2/', N'laptop-dell', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (4, N'HP4', N'0', N'Laptop HP', N'hp-logo.png', N'asset/img/logoBrand/HP4/', N'laptop-hp', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (5, N'LE3', N'0', N'Laptop Lenovo', N'lenovo.png', N'asset\img\logoBrand\LE3\', N'laptop-lenovo', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (6, N'MP1', N'AP5', N'MacBook Pro', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (7, N'MA2', N'AP5', N'Macbook Air ', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (8, N'ZK3', N'AS1', N'ASUS Zenbook', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (9, N'RG5', N'AS1', N'ASUS ROG', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (10, N'IN8', N'DE2', N'DELL Inspiron', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (11, N'VO9', N'DE2', N'DELL Vostro', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (12, N'PB14', N'HP4', N'HP Probook ', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (13, N'EB15', N'HP4', N'HP Elitebook ', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (14, N'GL21', N'LE3', N'LENOVO Gaming Legion', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (15, N'IP22', N'LE3', N'LENOVO IdeaPad', NULL, NULL, NULL, 1, NULL, NULL, NULL, 1)
INSERT [dbo].[Brand] ([id], [brandID], [parentID], [name], [avatar], [urlImage], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (16, N'abc', N'abc', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Brand] OFF
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (1, N'LG1', N'laptop gaming ', NULL, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (2, N'LP2', N'laptop phổ thông ', NULL, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (3, N'LD3', N'laptop đồ họa', NULL, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (4, N'LN4', N'laptop doanh nhân ', NULL, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (5, N'abc ', N'abcdxyz', NULL, 1, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Category] OFF
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM1', N'macbook-pro-14-m1-pro-2021-bac-2.jpg', N'\assets\images\products\laptop\AP5\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM10', N'macbook-pro-14-m1-pro-2021-bac-3.jpg', N'\assets\images\products\laptop\AP5\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM11', N'macbook-pro-14-m1-pro-2021-bac-4.jpg', N'\assets\images\products\laptop\AP5\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM12', N'macbook-pro-14-m1-pro-2021-bac-5.jpg', N'\assets\images\products\laptop\AP5\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM13', N'apple-macbook-pro-m1-2020-z11b000ct-1-org.jpg', N'\assets\images\products\laptop\AP5\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM14', N'apple-macbook-pro-m1-2020-z11b000ct-2-org.jpg', N'\assets\images\products\laptop\AP5\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM15', N'apple-macbook-pro-m1-2020-z11b000ct-3-org.jpg', N'\assets\images\products\laptop\AP5\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM16', N'asus-zenbook-ux425ea-i5-ki839w-4.jpg', N'\assets\images\products\laptop\AS1\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM17', N'dell-inspiron-15-5515-r7-n5r75700u104w1-2.jpg', N'\assets\images\products\laptop\DE2\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM18', N'dell-inspiron-15-5515-r7-n5r75700u104w1-3.jpg', N'\assets\images\products\laptop\DE2\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM19', N'dell-xps-17-9710-i7-xps7i7001w1-01.jpg', N'\assets\images\products\laptop\DE2\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM2', N'apple-macbook-pro-m1-2020-z11b000ct-4-180x125.jpg', N'\assets\images\products\laptop\AP5\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM20', N'dell-xps-17-9710-i7-xps7i7001w1-02.jpg', N'\assets\images\products\laptop\DE2\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM21', N'dell-xps-13-9310-i5-70273578-1.jpg', N'\assets\images\products\laptop\DE2\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM22', N'dell-xps-13-9310-i5-70273578-2.jpg', N'\assets\images\products\laptop\DE2\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM23', N'dell-xps-13-9310-i5-70273578-3.jpg', N'\assets\images\products\laptop\DE2\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM24', N'dell-xps-13-9310-i5-70273578-13.jpg', N'\assets\images\products\laptop\DE2\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM25', N'hp-15s-du1108tu-i3-10110u-2z6l7pa-1.jpg', N'\assets\images\products\laptop\HP4\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM26', N'hp-15s-du1108tu-i3-10110u-2z6l7pa-2.jpg', N'\assets\images\products\laptop\HP4\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM27', N'hp-15s-du1108tu-i3-10110u-2z6l7pa-3.jpg', N'\assets\images\products\laptop\HP4\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM28', N'hp-15s-du1108tu-i3-10110u-2z6l7pa-4.jpg', N'\assets\images\products\laptop\HP4\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM29', N'hp-zbook-firefly-14-g8-i5-275v5av-1 (1).jpg', N'\assets\images\products\laptop\HP4\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM3', N'asus-vivobook-a415ea-i3-eb1748w-1.jpg', N'\assets\images\products\laptop\AS1\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM30', N'hp-zbook-firefly-14-g8-i5-275v5av-2.jpg', N'\assets\images\products\laptop\HP4\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM31', N'hp-zbook-firefly-14-g8-i5-275v5av-4.jpg', N'\assets\images\products\laptop\HP4\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM32', N'hp-zbook-firefly-14-g8-i5-275v5av-5.jpg', N'\assets\images\products\laptop\HP4\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM33', N'lenovo-ideapad-5-15itl05-i5-82fg01h7vn-1-1.jpg', N'\assets\images\products\laptop\LE3\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM34', N'lenovo-ideapad-5-15itl05-i5-82fg01h7vn-2-1.jpg', N'\assets\images\products\laptop\LE3\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM35', N'lenovo-ideapad-5-15itl05-i5-82fg01h7vn-3-1.jpg', N'\assets\images\products\laptop\LE3\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM36', N'lenovo-ideapad-5-15itl05-i5-82fg01h7vn-4.jpg', N'\assets\images\products\laptop\LE3\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM37', N'thinkbook-14p-g2-ach-r5-20yn001hvn-1-2.jpg', N'\assets\images\products\laptop\LE3\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM38', N'thinkbook-14p-g2-ach-r5-20yn001hvn-2-2.jpg', N'\assets\images\products\laptop\LE3\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM39', N'thinkbook-14p-g2-ach-r5-20yn001hvn-3-2.jpg', N'\assets\images\products\laptop\LE3\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM4', N'asus-vivobook-a415ea-i3-eb1748w-2.jpg', N'\assets\images\products\laptop\AS1\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM40', N'thinkbook-14p-g2-ach-r5-20yn001hvn-4-2.jpg', N'\assets\images\products\laptop\LE3\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM5', N'asus-vivobook-a415ea-i3-eb1748w-3.jpg', N'\assets\images\products\laptop\AS1\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM6', N'asus-vivobook-a415ea-i3-eb1748w-4.jpg', N'\assets\images\products\laptop\AS1\product1\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM7', N'asus-zenbook-ux425ea-i5-ki839w-1.jpg', N'\assets\images\products\laptop\AS1\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM8', N'asus-zenbook-ux425ea-i5-ki839w-2.jpg', N'\assets\images\products\laptop\AS1\product2\detail', 1)
INSERT [dbo].[Image] ([ImageID], [avatar], [url], [status]) VALUES (N'IM9', N'asus-zenbook-ux425ea-i5-ki839w-3.jpg', N'\assets\images\products\laptop\AS1\product2\detail', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP1', N'LG1', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP2', N'LG1', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP3', N'LG1', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP4', N'LP2', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP5', N'LP2', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP6', N'LD3', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP7', N'LD3', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP8', N'LN4', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP9', N'LN4', 1)
INSERT [dbo].[mapping_Product_to_Category] ([productID], [categoryID], [status]) VALUES (N'SP10', N'LN4', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM1', N'SP10', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM10', N'SP10', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM11', N'SP10', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM12', N'SP10', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM13', N'SP5', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM14', N'SP5', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM15', N'SP5', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM16', N'SP6', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM17', N'SP2', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM18', N'SP2', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM19', N'SP2', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM2', N'SP5', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM20', N'SP2', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM21', N'SP7', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM22', N'SP7', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM23', N'SP7', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM24', N'SP7', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM25', N'SP4', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM26', N'SP4', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM27', N'SP4', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM28', N'SP4', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM29', N'SP8', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM3', N'SP1', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM30', N'SP8', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM31', N'SP8', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM32', N'SP8', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM33', N'SP3', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM34', N'SP3', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM35', N'SP3', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM36', N'SP3', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM37', N'SP9', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM38', N'SP9', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM39', N'SP9', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM4', N'SP1', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM40', N'SP9', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM5', N'SP1', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM6', N'SP1', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM7', N'SP6', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM8', N'SP6', 1)
INSERT [dbo].[mapping_Product_to_Image] ([ImageID], [ProductID], [status]) VALUES (N'IM9', N'SP6', 1)
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (1, N'SP1', N'Sản phẩm 1', 20000000, 0, N'product2.jpg', N'asset/img/product/', N'MP1', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1, 200)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (2, N'SP2', N'Sản phẩm 2', 25000000, 24500000, N'product1.jpg', N'asset/img/product/', N'MA2', N'nullnull', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1, 1)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (3, N'SP3', N'Sản phẩm 3', 30000000, 29900000, N'product2.jpg', N'asset/img/product/', N'ZK3', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1, 34)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (4, N'SP4', N'Sản phẩm 4', 40000000, 35000000, N'product1.jpg', N'asset/img/product/', N'RG5', N'null', N'null', N'nullnull', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1, 6)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (5, N'SP5', N'Sản phẩm 5', 50000000, 45000000, N'product2.jpg', N'asset/img/product/', N'IN8', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1, 8)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (6, N'SP6', N'Sản phẩm 6', 10000000, 0, N'product1.jpg', N'asset/img/product/', N'IN8', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1, 4)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (7, N'SP7', N'Sản phẩm 7', 15000000, 14500000, N'product2.jpg', N'asset/img/product/', N'VO9', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1, 5)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (8, N'SP8', N'Sản phẩm 8', 5000000, 4500000, N'product1.jpg', N'asset/img/product/', N'PB14', N'null', N'null', N'nullnull', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1, 10)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (9, N'SP9', N'Sản phẩm 9', 2000000, 1900000, N'product2.jpg', N'asset/img/product/', N'EB15', N'null', N'null', N'null', 1, CAST(0x0000AE6100000000 AS DateTime), 1, CAST(0x0000AE6100000000 AS DateTime), 1, 20)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (10, N'SP10', N'Sản phẩm 10', 20000000, 19900000, N'product1.jpg', N'asset/img/product/', N'IP22', N'null', N'null', N'null', 1, CAST(0x0000AE7300000000 AS DateTime), 1, CAST(0x0000AE7300000000 AS DateTime), 1, 2)
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (11, N'SP11', N'Asus zenbook', 30000000, 29000000, N'product2.jpg', N'asset/img/product/', N'ZK3', N'null', N'null', N'null', 1, CAST(0x0000AE7A00000000 AS DateTime), 1, NULL, NULL, 30)
SET IDENTITY_INSERT [dbo].[Product] OFF
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([userID], [email], [password], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (1, N'bin@gmail.com', N'123456', N'binh', N'nguyen', 1, N'null', NULL, 0, CAST(0x0000AE7E00000000 AS DateTime), 1, NULL, NULL)
INSERT [dbo].[users] ([userID], [email], [password], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (2, N'admin@gmail.com', N'123456', N'admin', N'admin', 1, N'null', NULL, 1, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[users] OFF
USE [master]
GO
ALTER DATABASE [WebsiteLaptop] SET  READ_WRITE 
GO
