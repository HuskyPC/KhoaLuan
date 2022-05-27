---product 
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
