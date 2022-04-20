using BLL.Banner;
using BLL.Brand;
using BLL.Product;
using BO.Banner;
using BO.Brand;
using BO.Product;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendWebsiteLaptop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class HomeController : ControllerBase
    {

        //-- proc load all banner home
        [HttpGet]
        [Route("getBrandAll")]
        public IEnumerable<BannerBO> getBrandAll()
        {
            BannerBLL objproduct = new BannerBLL();
            List<BannerBO> listPro = objproduct.getBrandAll();
            return listPro.ToArray();


        }
        //--proc BrandSuggestion home
        [HttpGet]
        [Route("getBrandSuggestion")]
        public IEnumerable<BrandBO> getBrandSuggestion()
        {
            BrandBLL objproduct = new BrandBLL();
            List<BrandBO> listPro = objproduct.getBrandSuggestion();
            return listPro.ToArray();


        }
        //--pro load top new product 
        [HttpGet]
        [Route("getTopNewProduct")]
        public IEnumerable<ProductBO> getTopNewProduct(int top)
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listPro = objproduct.getTopNewProduct(top);
            return listPro.ToArray();


        }
        [HttpGet]
        [Route("getBrandIDandParentID")]
        public IEnumerable<BrandBO> getBrandIDandParentID()
        {
            BrandBLL objproduct = new BrandBLL();
            List<BrandBO> listBra = objproduct.getBrandIDandParentID();
            return listBra.ToArray();


        }
        //[HttpGet]
        //[Route("/Home/getLoadBrandTopX")]
        //public IEnumerable<BrandBO> loadBrandTopX(int sl)
        //{
        //    BrandBLL objBrand = new BrandBLL();
        //    List<BrandBO> listPro = objBrand.loadBrandTopX(sl);
        //    return listPro.ToArray();


        //}
        //[HttpGet]
        //[Route("/Home/getProductNewTopX")]
        //public IEnumerable<ProductBO> getProductNewTopX(int sl)
        //{
        //    ProductBLL objBrand = new ProductBLL();
        //    List<ProductBO> listPro = objBrand.getProductNewTopX(sl);
        //    return listPro.ToArray();


        //}
        //[HttpGet]
        //[Route("/Home/getBrandLoadTopX")]
        //public IEnumerable<BannerBO> getBannerLoadTopX(int sl)
        //{
        //    BannerBLL objproduct = new BannerBLL();
        //    List<BannerBO> listBanner = objproduct.getBannerLoadTopX(sl);
        //    return listBanner.ToArray();
        //}
        //[HttpGet]
        //[Route("/Home/getLoadProductByBrandTopX")]
        //public IEnumerable<ProductBO> getLoadProductByBrandTopX(int sl, string Brand)
        //{
        //    ProductBLL objproduct = new ProductBLL();
        //    List<ProductBO> listProduct = objproduct.getLoadProductByBrandTopX(sl, Brand);
        //    return listProduct.ToArray();
        //}
        //[HttpGet]
        //[Route("/Home/getNameBrandAll")]
        //public IEnumerable<BrandBO> getNameBrandAll()
        //{
        //    BrandBLL objproduct = new BrandBLL();
        //    List<BrandBO> listProduct = objproduct.getNameBrandAll();
        //    return listProduct.ToArray();
        //}
    }
}
