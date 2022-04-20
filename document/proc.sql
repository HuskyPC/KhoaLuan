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
--drop proc BrandHomeTopX
create proc BrandHomeTopX
@x int 
as 
select top(@x) brandID, avatar, urlImage
from Brand
where status=1 and parentID ='0'

exec BrandHomeTopX @x=6


--proc select top new product 
create proc getProductNewTop
@x int
as
select top(@x) ProductID, name, price, priceSale, avatar, urlImage
from product 
order by name desc 

exec getProductNewTop @x=8


--proc select load top x banner
--drop proc getBrandLoadTopX
create proc getBrandLoadTopX
@x int
as
select top(@x) id, name, imgDesktop, urlImgDesktop, imgTablet, urlImgTablet, imgMobile, urlImgMobile, url, contentUrrl, detail1, detail2
 from Banner
where status =1

exec getBrandLoadTopX  @x=3


--drop proc getLoadProductByBrandTopX
create proc getLoadProductByBrandTopX
@x int,
@nameBrand  nvarchar(200)
as
select top(@x) bra.brandID, pro.ProductID, pro.name, pro.avatar, pro.urlImage, pro.price, pro.priceSale
from product pro, Category cate, Brand bra, mapping_Category_to_Brand map
where pro.CategoryID=cate.categoryID and  cate.categoryID= map.categoryID and map.brandID=bra.brandID 
		and pro.status=1 and cate.status=1 and bra.status=1 and map.status=1 and bra.parentID='0'and  bra.name like N'%'+@nameBrand+'%'




exec getLoadProductByBrandTopX @x=3, @nameBrand='asus'


--proc get name brand 
--drop proc getNameBrandAll
create proc getNameBrandAll
as
select name, brandID
from Brand

exec getNameBrandAll
