﻿---product 
--drop proc postCreateProduct
create proc postCreateProduct
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


exec postCreateProduct @ProductID='SP14', @name=N'sản phẩm 12', @price=12000,@priceSale= 2345, @avatar= 'null', @urlImage='null',
@brandID='MP1', @slug='null', @shortDes='null',@fullDes='null',@status=1,@createdDate='08/05/2022',@createdBy=1,@amount=2

--drop proc getNewProductIDByStt
create proc getProductIDByStt
@stt int
as
select ProductID
from Product
where stt= @stt

exec getProductIDByStt 12

--drop proc getMaxID
create proc getMaxSttProduct
as
select max(stt) as MaxStt
from Product

exec getMaxSttProduct

--drop proc getProductIDbyMaxStt
create proc getProductIDbyMaxStt
@x int 
as 
select ProductID
from product
where stt= @x

exec getProductIDbyMaxStt @x='12'


create proc insertProductToCategory
@productID varchar(10),
@categoryID varchar(10)
as 
insert into mapping_Product_to_Category(productID, categoryID, status) values(@productID, @categoryID, 1)


--drop proc insertProductToImages
create proc insertProductToImages
@ProductID varchar(10),
@ImageID varchar(20)
as 
insert into mapping_Product_to_Image (ProductID, ImageID, status) values(@ProductID, @ImageID, 1)


create proc insertImages
@ImageID nvarchar(20),
@avatar nvarchar(MAX)
as
insert into Image(ImageID, avatar, url, status)values(@ImageID, @avatar, 'null', 1)

drop proc MaxSTTImages
create proc MaxSTTImages 
as
select MAX(stt) as MaxStt
from Image 

create proc getImagesIDbySTT
@stt int
as
select ImageID
from Image
where stt= @stt

exec getImagesIDbySTT 40

update Product set status=0 where ProductID= 'sp1'

create proc getMaxSTTCategory
as
select MAX(stt ) as maxstt
from Category

exec getMaxSTTCategory


create proc getCategoryIDBySTT
@x int
as
select categoryID
from Category
where stt= @x

exec getCategoryIDBySTT 4

create proc createCategory
@categoryID varchar(10),
@name nvarchar(70),
@slug nvarchar(MAX),
@status int,
@createdDate datetime,
@createdBy int
as
insert into Category(categoryID, name, slug, status, createdDate, createdBy)values(@categoryID, @name, @slug, @status, @createdDate, @createdBy)

--exec createCategory @categoryID='ct5', @name='hfbjdsvds', @slug='fhdbs', @status=1, @createdDate='07/06/2022', @createdBy=1
