CREATE proc productItem
@x int
as
select top(@x) pro.ProductID, pro.name, pro.price, pro.priceSale, pro.avatar, pro.CategoryID, pro.urlImage, cate.Name as categoryName
from Product pro, Category cate
where pro.CategoryID=cate.CategoryID and pro.status=1

exec productItem @x=5

--drop proc productItem
go 

create proc loadProductByCategoryTopX
@Category nvarchar(10),
@x int
as 
select top(@x) pro.ProductID, pro.CategoryID, cate.Name, pro.name, pro.avatar, pro.price, pro.priceSale
from Product pro, Category cate
where pro.CategoryID=cate.CategoryID and cate.CategoryID=@Category

exec loadProductByCategoryTopX @x=5, @category="AS1"

go



--drop proc PostProductByID
exec PostProductByID 'sp1'

create proc PostProductByID
@x nvarchar(10)
as
select pro.ProductID, pro.name as productName,  im.avatar, im.url,pro.shortDes, pro.fullDes, pro.price, pro.priceSale, pro.amount, cate.name
from Product pro,Image im,  mapping_Product_to_Image maPI, Category cate
where pro.ProductID= maPI.ProductID and maPI.ImageID= im.ImageID and cate.categoryID= pro.CategoryID
	and cate.status=1 
	and im.status=1
	and maPI.status=1 
	and pro.ProductID=@x 


--drop proc BannerAll
create proc BannerAll
as
select id, name, imgDesktop, urlImgDesktop, imgTablet, urlImgTablet, imgMobile, urlImgMobile, url, contentUrrl, detail1, detail2
from Banner 
where status=1

exec BannerAll

-- proc seclect brand top x 
create proc BrandHomeTopX
@x int 
as 
select top(@x) brandID, avatar, urlImage
from Brand
where status=1

exec BrandHomeTopX @x=1

