---trang home
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
select brandID,  avatar, urlImage
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
select brandID, parentID, name
from brand
where status=1

exec getBrandIDandParentID


--proc get all product 
create proc getProductAll
as 
select ProductID, name, brandID,price, priceSale , urlImage, avatar
from product 
where status =1

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

-- trang search sản phẩm 
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

--user
create proc createUsser
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

SET DATEFORMAT DMY
exec createUsser @email='bin@gmail.om', @password='123456', @lastName='last name', @fristName= 'frist name', @status=1,
@access =0, @createdDate='20/04/2022', @createdBy=1

					