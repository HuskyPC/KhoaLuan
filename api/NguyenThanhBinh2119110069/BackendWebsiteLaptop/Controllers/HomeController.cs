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
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        [Route("/Home/getProduct")]
        public IEnumerable<ProductBO> getProduct(int SL)
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listPro = objproduct.loadXProduct(SL);
            return  listPro.ToArray();
            
           
        }
        [HttpGet]
        [Route("/Home/getProductbyCategory")]
        public IEnumerable<ProductBO> getProductByCategory()
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listPro = objproduct.loadXProduct(4);
            return listPro.ToArray();


        }
        [HttpGet]
        [Route("/Home/getLoadBrandTopX")]
        public IEnumerable<BrandBO> loadBrandTopX(int sl)
        {
            BrandBLL objBrand = new BrandBLL();
            List<BrandBO> listPro = objBrand.loadBrandTopX(sl);
            return listPro.ToArray();


        }
        [HttpGet]
        [Route("/Home/getProductNewTopX")]
        public IEnumerable<ProductBO> getProductNewTopX(int sl)
        {
            ProductBLL objBrand = new ProductBLL();
            List<ProductBO> listPro = objBrand.getProductNewTopX(sl);
            return listPro.ToArray();


        }
        [HttpGet]
        [Route("/Home/getBrandLoadTopX")]
        public IEnumerable<BannerBO> getBannerLoadTopX(int sl)
        {
            BannerBLL objproduct = new BannerBLL();
            List<BannerBO> listBanner = objproduct.getBannerLoadTopX(sl);
            return listBanner.ToArray();
        }
        [HttpGet]
        [Route("/Home/getLoadProductByBrandTopX")]
        public IEnumerable<ProductBO> getLoadProductByBrandTopX(int sl, string Brand)
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listProduct = objproduct.getLoadProductByBrandTopX(sl, Brand);
            return listProduct.ToArray();
        }
        [HttpGet]
        [Route("/Home/getNameBrandAll")]
        public IEnumerable<BrandBO> getNameBrandAll()
        {
            BrandBLL objproduct = new BrandBLL();
            List<BrandBO> listProduct = objproduct.getNameBrandAll();
            return listProduct.ToArray();
        }
    }
}
