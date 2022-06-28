---trang home---------------------------------
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


--proc get all brand
--drop proc getAllBrand
create proc getAllBrand
as
select brandID, parentID, name, avatar, urlImage, slug
from Brand
where status=1

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

@lastName nvarchar(50),
@fristName nvarchar(100),
@status int,
@access int, 
@createdDate datetime,
@createdBy int
as 
INSERT INTO users( userName,email, lastName,fristName,status,access,createdDate,createdBy) 
values(@userName, @email, @lastName, @fristName, @status, @access, @createdDate, @createdBy )

SET DATEFORMAT DMY
exec postCreateUsser @userName='bin3', @email='bin@gmail.com', @password='123456', @lastName='last name', @fristName= 'frist name', @status=1,
@access =0, @createdDate='20/04/2022', @createdBy=1
 


 create proc getAllUserName
 as 
 select userName from users
 where status= 1

 exec getAllUserName 
 --delete  from users 

 create proc getUserName
 @x nvarchar(50)
 as 
 select userID
 from users 
 where status =1 and userName=@x

 create proc insertPassword
 @password nvarchar(max),
 @userID int, 
 @paswordSalt nvarchar(8)
 as
 insert into UserPassword(userID, password, passwordSalt) values(@userID, @password, @paswordSalt)
 
 --user login 

 --drop proc postLoginUser
 --create proc postLoginUser
 --@userName nvarchar(20),
 --@password nvarchar(100)
 --as
 --select us.userID,  us.lastName, us.fristName, us.avatar, us.access, us.urlImage
 --from users us
 --where us.status=1 and us.userName= @userName and us.password= @password
 
 --exec postLoginUser @userName='bin', @password='123456'

 --drop proc postLoginUser
 create proc postLoginUser
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

 --select  passwordSalt from UserPassword where userID=7
 --select userID from users where userName = 'binh5'
 exec postLoginUser @username='bin5', @password='123456'

 -- trang cart và truy vấn liên quan đến cart --------------------
 
 --proc count cart
 --drop proc getCountCart
 create proc getCountCart
 @userID int
 as 
 select count(quantity) as tong
 from CART 
 where status= 1 and userID= @userID
group by userid

exec getCountCart @userID= 12


--proc get item product buy id user
--drop proc getCountItemCartByUsertID
create proc getCountItemCartByUsertID
@userID int 
as
select  quantity from Cart where status=1and  userID= 12 

exec getCountItemCartByUsertID 12

--proc get item card by user id
create proc getItemCardByUserID
@userID int 
as
select cartID, productID, quantity from Cart where status=1 and userID= @userID

exec getItemCardByUserID 12


--proc update quantity in cart by product id and user id 
--drop proc updateQuantityCart
create proc updateQuantityCart
@userId int,
@productID varchar(6),
@quantity int 
as
update Cart set quantity=@quantity where userID=@userId and productID= @productID

exec updateQuantityCart @userId=12, @productID='sp7',@quantity=2


--proc get quantity item cart by user id and product id 
create proc getQuantityItemCartByUserProduct
@userID int,
@productID varchar(6)
as 
select quantity from cart where userID= @userID and productID =@productID


--proc delete cart item by user id and product id
create proc deleteCartitem 
@cartID varchar(15)
as
delete from Cart where cartID=@cartID


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

exec getCartIDBySTT 14

--proc get information userAccount 
--drop proc getInformationInCart
create proc getInformationInCart
@userid int
as
select u.userID, u.fristName, u.lastName, ud.address, ud.phone from users u, userDetail ud 
where u.userID= ud.userID and u.userID=@userid

exec getInformationInCart 12

--proc insert cart 
--drop proc postInsertCart
create proc postInsertCart 
@productID varchar(10),
@userID int, 
@cartID varchar(15),
@quantity int 
as 
insert into cart(cartID,productID, userID, status, quantity ) values(@cartID,@productID,@userID, 1 ,@quantity)

 
exec postInsertCart @productID= 'SP3', @userID='4', @cartID='CA9', @quantity=2



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

---------------- trnag product Detail 

create proc getProductDetail
@productID varchar(10)
as 
select ProductID, name, price, priceSale,avatar,urlImage,brandID,slug,shortDes,fullDes
from product 
where status=1 and ProductID=@productID

