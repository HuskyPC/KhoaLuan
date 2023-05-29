USE [WebsiteLaptop]
GO
/****** Object:  FullTextCatalog [searchNameProduct]    Script Date: 20/5/2022 02:01:16 ******/
CREATE FULLTEXT CATALOG [searchNameProduct]WITH ACCENT_SENSITIVITY = ON

GO
/****** Object:  StoredProcedure [dbo].[DeleteCart]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[DeleteCart] 
@cartID varchar(15)
as 
delete from Cart where CartID= @cartID
GO
/****** Object:  StoredProcedure [dbo].[execpostInsertCart]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create proc [dbo].[execpostInsertCart]
 @x int output 
 as
exec @x =postInsertCart @productID= 'SP3', @userID='1', @cartID='CA4'
GO
/****** Object:  StoredProcedure [dbo].[getAllBrand]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getAllBrand]
as
select brandID, parentID, name, avatar, urlImage, slug
from Brand
where status=1
GO
/****** Object:  StoredProcedure [dbo].[getAllmappingProductCategory]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getAllmappingProductCategory]
as
select productID, categoryID
from mapping_Product_to_Category 
where status =1
GO
/****** Object:  StoredProcedure [dbo].[getAllUserName]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create proc [dbo].[getAllUserName]
 as 
 select userName from users
 where status= 1
GO
/****** Object:  StoredProcedure [dbo].[getBanerAll]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  StoredProcedure [dbo].[getBrandIDandParentID]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  StoredProcedure [dbo].[getBrandSuggestion]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getBrandSuggestion] 
as 
select brandID,  avatar, urlImage, name
from Brand 
where status=1 and parentID ='0'
GO
/****** Object:  StoredProcedure [dbo].[getCartIDBySTT]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getCartIDBySTT]
@stt int
as
select cartID
from cart 
where stt =@stt
GO
/****** Object:  StoredProcedure [dbo].[getCategory]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getCategory]
as 
select name, categoryID
from Category 
where status =1
GO
/****** Object:  StoredProcedure [dbo].[getCountCart]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create proc [dbo].[getCountCart]
 @userID int
 as 
 select count(productID) as tong
 from CART 
 where status= 1 and userID= @userID
group by userid
GO
/****** Object:  StoredProcedure [dbo].[getDeleteCart]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getDeleteCart] 
@userID int,
@productID varchar(10)
as 
delete from Cart where userID= @userID and productID = @productID
GO
/****** Object:  StoredProcedure [dbo].[getInsertCart]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getInsertCart] 
@productID varchar(10),
@userID int
as 
insert into cart(productID, userID, status ) values(@productID,@userID, 1)
GO
/****** Object:  StoredProcedure [dbo].[getMaxSTT]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getMaxSTT]
as
select max(stt) as maxs
from Cart
where status =1
exec getMaxSTT
GO
/****** Object:  StoredProcedure [dbo].[getMaxSttProduct]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getMaxSttProduct]
as
select max(stt) as MaxStt
from Product
GO
/****** Object:  StoredProcedure [dbo].[getParentByBrandId]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  StoredProcedure [dbo].[getProductAll]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  StoredProcedure [dbo].[getProductByBrandID]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  StoredProcedure [dbo].[getProductByID]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getProductByID]
@productID varchar(10)
as
select ProductID,name, price, priceSale, avatar, urlImage 
from Product 
where status=1 and ProductID= @productID
GO
/****** Object:  StoredProcedure [dbo].[getProductByStt]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getProductByStt]
@stt int
as
select ProductID
from Product
where stt= @stt
GO
/****** Object:  StoredProcedure [dbo].[getProductID]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getProductID]
as
select ProductID
from Product 
where status =1 
GO
/****** Object:  StoredProcedure [dbo].[getProductIDByStt]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[getProductIDByStt]
@stt int
as
select ProductID
from Product
where stt= @stt
GO
/****** Object:  StoredProcedure [dbo].[getSearchProductExact]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  StoredProcedure [dbo].[getSearchProductFREETEXT]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  StoredProcedure [dbo].[getSearchProductLike]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  StoredProcedure [dbo].[getTopNewProduct]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  StoredProcedure [dbo].[getUserName]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create proc [dbo].[getUserName]
 @x nvarchar(50)
 as 
 select userID
 from users 
 where status =1 and userName=@x
GO
/****** Object:  StoredProcedure [dbo].[insertPassword]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create proc [dbo].[insertPassword]
 @password nvarchar(max),
 @userID int, 
 @paswordSalt nvarchar(8)
 as
 insert into UserPassword(userID, password, passwordSalt) values(@userID, @password, @paswordSalt)
GO
/****** Object:  StoredProcedure [dbo].[isExitsCart]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[isExitsCart]
@userID int ,
@productID varchar(10)
 as
select cartID
from Cart 
where status= 1and userID= @userID and productID= @productID
GO
/****** Object:  StoredProcedure [dbo].[postCreateProduct]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[postCreateProduct]
@ProductID varchar(10),
@name nvarchar(200),
@price int,
@priceSale int,
@avatar nvarchar(1000),
@urlImage nvarchar(4000),
@brandID varchar(6),
@slug nvarchar(300),
@shortDes nvarchar(1000),
@fullDes nvarchar(4000),
@status int, 
@createdDate datetime,
@createdBy int,

@amount int 
as 
insert into Product(ProductID,name,price,priceSale,avatar,urlImage,brandID,slug,shortDes,
					fullDes,status,createdDate,createdBy,amount)
values(@ProductID,@name,@price,@priceSale,@avatar,@urlImage,@brandID,@slug,@shortDes,
					@fullDes,@status,@createdDate,@createdBy,@amount)
GO
/****** Object:  StoredProcedure [dbo].[postCreateUsser]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[postCreateUsser]
@userName nvarchar(50),
@email nvarchar(200),

@lastName nvarchar(50),
@fristName nvarchar(100),
@status int,
@access int, 
@createdDate datetime,
@createdBy int
as 
INSERT INTO users( userName,email, lastName,fristName,status,access,createdDate,createdBy) 
values(@userName, @email, @lastName, @fristName, @status, @access, @createdDate, @createdBy )
GO
/****** Object:  StoredProcedure [dbo].[postInsertCart]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[postInsertCart] 
@productID varchar(10),
@userID int, 
@cartID varchar(15)
as 
insert into cart(cartID,productID, userID, status ) values(@cartID,@productID,@userID, 1)
GO
/****** Object:  StoredProcedure [dbo].[postLoginUser]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 create proc [dbo].[postLoginUser]
 @username varchar(20),
 @password varchar(100)
 as
 begin 
  DECLARE @passwordSalt varchar(8), @userID int 
  begin select @userID = userID from users where userName = @username and status=1 end
  begin select @passwordSalt = passwordSalt from UserPassword where userID= @userID end

 select up.userID, us.lastName, us.fristName, us.avatar, us.access, us.urlImage
 from UserPassword up, users us
 where up.userID= us.userID and up.password =CONVERT(VARCHAR(max), HashBytes('MD5', @password+@passwordSalt), 2)
 end
GO
/****** Object:  Table [dbo].[Banner]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  Table [dbo].[Brand]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  Table [dbo].[Cart]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Cart](
	[stt] [int] IDENTITY(1,1) NOT NULL,
	[cartID] [varchar](15) NOT NULL,
	[productID] [varchar](10) NOT NULL,
	[userID] [int] NOT NULL,
	[status] [int] NULL,
 CONSTRAINT [PK_Cart] PRIMARY KEY CLUSTERED 
(
	[cartID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Category]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  Table [dbo].[Image]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  Table [dbo].[mapping_Product_to_Category]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[mapping_Product_to_Category](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[productID] [varchar](10) NOT NULL,
	[categoryID] [varchar](10) NOT NULL,
	[status] [int] NOT NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[mapping_Product_to_Image]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  Table [dbo].[Product]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  Table [dbo].[userDetail]    Script Date: 20/5/2022 02:01:16 ******/
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
/****** Object:  Table [dbo].[UserPassword]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserPassword](
	[userID] [int] NOT NULL,
	[password] [varchar](max) NOT NULL,
	[passwordSalt] [nvarchar](10) NOT NULL,
 CONSTRAINT [PK_UserPassword] PRIMARY KEY CLUSTERED 
(
	[userID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[users]    Script Date: 20/5/2022 02:01:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[userID] [int] IDENTITY(1,1) NOT NULL,
	[userName] [nvarchar](20) NOT NULL,
	[email] [nvarchar](200) NULL,
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
	[userName] ASC
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
SET IDENTITY_INSERT [dbo].[Cart] ON 

INSERT [dbo].[Cart] ([stt], [cartID], [productID], [userID], [status]) VALUES (1, N'CA1', N'SP1', 1, 1)
INSERT [dbo].[Cart] ([stt], [cartID], [productID], [userID], [status]) VALUES (2, N'CA2', N'SP2', 1, 1)
INSERT [dbo].[Cart] ([stt], [cartID], [productID], [userID], [status]) VALUES (3, N'CA3', N'SP1', 2, 1)
INSERT [dbo].[Cart] ([stt], [cartID], [productID], [userID], [status]) VALUES (6, N'CA4', N'SP3', 1, 1)
SET IDENTITY_INSERT [dbo].[Cart] OFF
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (1, N'LG1', N'laptop gaming ', NULL, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (2, N'LP2', N'laptop phổ thông ', NULL, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (3, N'LD3', N'laptop đồ họa', NULL, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (4, N'LN4', N'laptop doanh nhân ', NULL, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Category] ([stt], [categoryID], [name], [slug], [status], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (5, N'abc ', N'abcdxyz', NULL, 0, NULL, NULL, NULL, NULL)
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
SET IDENTITY_INSERT [dbo].[mapping_Product_to_Category] ON 

INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (1, N'SP1', N'LG1', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (2, N'SP2', N'LG1', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (3, N'SP3', N'LG1', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (4, N'SP4', N'LP2', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (5, N'SP5', N'LP2', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (6, N'SP6', N'LD3', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (7, N'SP7', N'LD3', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (8, N'SP8', N'LN4', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (9, N'SP9', N'LN4', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (10, N'SP10', N'LN4', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (11, N'SP1', N'LD3', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (12, N'SP2', N'LN4', 1)
INSERT [dbo].[mapping_Product_to_Category] ([id], [productID], [categoryID], [status]) VALUES (13, N'SP4', N'LG1', 1)
SET IDENTITY_INSERT [dbo].[mapping_Product_to_Category] OFF
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
INSERT [dbo].[Product] ([stt], [ProductID], [name], [price], [priceSale], [avatar], [urlImage], [brandID], [slug], [shortDes], [fullDes], [status], [createdDate], [createdBy], [updatedDate], [updatedBy], [amount]) VALUES (12, N'SP12', N'sản phẩm 12', 12000, 2345, N'null', N'null', N'MP1', N'null', N'null', N'null', 1, CAST(0x0000AEE800000000 AS DateTime), 1, NULL, NULL, 2)
SET IDENTITY_INSERT [dbo].[Product] OFF
INSERT [dbo].[UserPassword] ([userID], [password], [passwordSalt]) VALUES (8, N'52C0CCD150D64CA9780E038192F0093C', N'okrk2IHO')
INSERT [dbo].[UserPassword] ([userID], [password], [passwordSalt]) VALUES (9, N'85E50CE9BF2D4F55838A22B28BF39085', N'fxlu6CWR')
INSERT [dbo].[UserPassword] ([userID], [password], [passwordSalt]) VALUES (10, N'7195CB60B958AB3E9AB06AC9DD70C85F', N'oekd8YAI')
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([userID], [userName], [email], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (2, N'admin', N'admin@gmail.com', N'admin', N'admin', 1, N'null', NULL, 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[users] ([userID], [userName], [email], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (1, N'bin', N'bin@gmail.com', N'binh', N'nguyen', 1, N'null', NULL, 0, CAST(0x0000AE7E00000000 AS DateTime), 1, NULL, NULL)
INSERT [dbo].[users] ([userID], [userName], [email], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (3, N'bin2', N'bin2@gmail.com', N'bin ', N'nguyen', 1, NULL, NULL, 0, CAST(0x0000AE7F00000000 AS DateTime), 1, NULL, NULL)
INSERT [dbo].[users] ([userID], [userName], [email], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (6, N'bin3', N'bin@gmail.com', N'last name', N'frist name', 1, NULL, NULL, 0, CAST(0x0000AE7D00000000 AS DateTime), 1, NULL, NULL)
INSERT [dbo].[users] ([userID], [userName], [email], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (8, N'bin5', N'binh5@gmail.com', N'binh', N'Nguyễn', 1, NULL, NULL, 0, CAST(0x0000AE9B00000000 AS DateTime), 1, NULL, NULL)
INSERT [dbo].[users] ([userID], [userName], [email], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (7, N'binh5', N'binh5@gmail.com', N'binh ', N'nguyen', 1, NULL, NULL, 0, CAST(0x0000AE9B00000000 AS DateTime), 1, NULL, NULL)
INSERT [dbo].[users] ([userID], [userName], [email], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (9, N'tran1', N'tran1@gmail.com', N'Nguyễn', N'trần', 1, NULL, NULL, 0, CAST(0x0000AE9B00000000 AS DateTime), 1, NULL, NULL)
INSERT [dbo].[users] ([userID], [userName], [email], [lastName], [fristName], [status], [avatar], [urlImage], [access], [createdDate], [createdBy], [updatedDate], [updatedBy]) VALUES (10, N'tran3', N'tran3@gmail.com', N'binh ', N'Nguyễn', 1, NULL, NULL, 0, CAST(0x0000AE9B00000000 AS DateTime), 1, NULL, NULL)
SET IDENTITY_INSERT [dbo].[users] OFF
