﻿---trang home---------------------------------
-- proc load all banner home
create proc getBanerAll
as
select  id,name,imgDesktop,urlImgDesktop,imgTablet,urlImgTablet,imgMobile,urlImgMobile,url,contentUrrl,detail1,detail2
from Banner 
where status=1
order by orders


--proc BrandSuggestion home 
--drop proc getBrandSuggestion
create proc getBrandSuggestion 
as 
select brandID,  avatar, urlImage, name
from Brand 
where status=1 and parentID ='0'

exec getBrandSuggestion

--pro load top new product 
create proc getTopNewProduct
@top int
as
select top(@top) ProductID, name, price, priceSale, avatar, urlImage
from Product 
where status=1
order by createdDate desc

exec getTopNewProduct 5

--get product 
create proc getProductByBrand
@top int
as 
select top(@top) ProductID, name, price, priceSale, avatar, urlImage
from product

-- get brand all
--drop proc getBrandIDandParentID
create proc getBrandIDandParentID
as 
select brandID, parentID, namee
from brand
where status=1

exec getBrandIDandParentID


--proc get all product 
create proc getProductAll
as 
select ProductID, name, brandID,price, priceSale , urlImage, avatar
from product 
where status =1

exec getProductAll

--proc get product by brandID 
create proc getProductByBrandID
@brandId varchar(6)
as
select ProductID, name, brandID,price, priceSale , urlImage, avatar
from Product 
where status =1 and BrandId = @brandId

exec getProductByBrandID @brandID ='MP1'

--proc getParentIdBrand
create proc getParentByBrandId
@parentId varchar(6)
as 
select brandID, parentID, name
from Brand 
where status=1 and parentID =@parentId

exec getParentByBrandId @parentID= 'AP5'

-- trang product - san pham 

--proc filter san pham 

-- trang search sản phẩm --------------------------------------
--drop proc getSearchProduct
create proc getSearchProductFREETEXT
@x nvarchar(300)
as
select ProductID, name, price, priceSale, urlImage, avatar 
from Product
where status =1 and FREETEXT(name,@x);

exec getSearchProductFREETEXT @x=N'Sản phẩm 1'

create proc getSearchProductLike
@x nvarchar(300)
as
select ProductID, name, price, priceSale, urlImage, avatar 
from Product
where status =1 and name like N'%'+@x+'%'

exec getSearchProductLike @x=N'Sản phẩm 1'

--drop proc getSearchProductExact
create proc getSearchProductExact
@x nvarchar(300)
as
select ProductID, name, price, priceSale, urlImage, avatar 
from Product
where status =1 and name= @x

exec getSearchProductexact @x=N'Sản phẩm 1'

--select * from Product 
--where name like N'%Sản phẩm 5%' or FREETEXT(name,'"*sản phẩm*"');

--select * from Product 
--where  FREETEXT(name,'"*san*"'+'' as string );

--------------============--------------
--link: 
--https://laptrinhvb.net/bai-viet/co-so-du-lieu/--SQLSERVER---Huong-dan-su-dung-chuc-nang-tim-kiem-Full-Text-Search-SQL-SERVER-2016/13142194bda3c869.html
--kiểm tra có công cụ kiểm tra Full Text Search đã được cài đặt hay chưa:
SELECT SERVERPROPERTY('IsFullTextInstalled')
--tạo full text 
CREATE FULLTEXT CATALOG searchNameProduct;
--------------===================-----------------

--select  cate.name,cate.categoryID
--from  Category cate 
--where cate.status=1 
--	and  cate.categoryID not in (select map.categoryID
--								from Product pro,mapping_Product_to_Category map 
--								where pro.ProductID= map.productID
--								group by map.categoryID)

--select cate.categoryID, cate.name, count(map.categoryID) as So_Luong 
--from Category cate,  mapping_Product_to_Category map 
--where cate.categoryID =map.categoryID 
--	  and cate.status= 1 
--	  and map.status =1 
--	  and cate.categoryID in (select categoryID from mapping_Product_to_Category  group by categoryID)
--group by map.productID , cate.categoryID, cate.name 

--user register----------------------------------------------
-- drop proc postCreateUsser
create proc postCreateUsser
@userName nvarchar(50),
@email nvarchar(200),
@password nvarchar(100),
@lastName nvarchar(50),
@fristName nvarchar(100),
@status int,
@access int, 
@createdDate datetime,
@createdBy int
as 
INSERT INTO users( userName,email, password,lastName,fristName,status,access,createdDate,createdBy) 
values(@userName, @email, @password, @lastName, @fristName, @status, @access, @createdDate, @createdBy )

SET DATEFORMAT DMY
exec postCreateUsser @userName='bin3', @email='bin@gmail.com', @password='123456', @lastName='last name', @fristName= 'frist name', @status=1,
@access =0, @createdDate='20/04/2022', @createdBy=1
 


 create proc getAllUserName
 as 
 select userName from users
 where status= 1

 exec getAllUser 
 --delete  from users 
 
 --user login 

 --drop proc postLoginUser
 create proc postLoginUser
 @email nvarchar(200),
 @password nvarchar(100)
 as
 select us.userID,  us.lastName, us.fristName, us.avatar, us.access, us.urlImage
 from users us
 where us.status=1 and us.email=@email and us.password= @password
 
 exec postLoginUser @email='bin@gmail.com', @password='123456'


 -- trang cart và truy vấn liên quan đến cart --------------------
 
 --proc count cart
 --drop proc getCountCart
 create proc getCountCart
 @userID int
 as 
 select count(productID) as tong
 from CART 
 where status= 1 and userID= @userID
group by userid

exec getCountCart @userID= 3


--proc get cart 
--drop proc getMaxSTT
create proc getMaxSTT
as
select max(stt) as maxs
from Cart
where status =1
exec getMaxSTT

create proc getCartIDBySTT
@stt int
as
select cartID
from cart 
where stt =@stt



--proc insert cart 
--drop proc postInsertCart
create proc postInsertCart 
@productID varchar(10),
@userID int, 
@cartID varchar(15)
as 
insert into cart(cartID,productID, userID, status ) values(@cartID,@productID,@userID, 1)

 
exec postInsertCart @productID= 'SP3', @userID='1', @cartID='CA9'



--proc delete Cart 
--drop proc DeleteCart
create proc DeleteCart 
@cartID varchar(15)
as 
delete from Cart where CartID= @cartID

exec DeleteCart @cartID= 'ca4'

--proc isCart
create proc isExitsCart
@userID int ,
@productID varchar(10)
 as
select cartID
from Cart 
where status= 1and userID= @userID and productID= @productID

exec isExitsCart @userID= 1, @productID='SP1'

-------trang Store ---------------------
--create proc get all category status =1
--drop proc  getcategory
create proc getCategory
as 
select name, categoryID
from Category 
where status =1

exec getcategory


--prc delect all mapping_Product_Category
create proc getAllmappingProductCategory
as
select productID, categoryID
from mapping_Product_to_Category 
where status =1

exec getAllmappingProductCategory

--drop proc getProductByID
create proc getProductID
as
select ProductID
from Product 
where status =1 

exec  getProductID

--drop proc  getProductByID
create proc getProductByID
@productID varchar(10)
as
select ProductID,name, price, priceSale, avatar, urlImage 
from Product 
where status=1 and ProductID= @productID

exec getProductByID @productID='sp1'


