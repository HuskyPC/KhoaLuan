using BLL.Brand;
using BLL.Category;
using BLL.Mapping;
using BLL.Product;
using BO.Brand;
using BO.Category;
using BO.Mapping;
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

    public class SanPhamController : ControllerBase
    {
        private CategoryBLL categoryBLL;
        private ProductBLL productBLL;
        private ProductToCategoryBLL mapProtoCate;
        public BrandBLL brandBLL;
        public SanPhamController()
        {
            categoryBLL = new CategoryBLL();
            productBLL = new ProductBLL();
            mapProtoCate = new ProductToCategoryBLL();
            brandBLL = new BrandBLL();
        }
        [HttpGet]
        [Route("getCategory")]
        public IEnumerable<CategoryBO> getCategoryAll()
        {
            List<CategoryBO> listPro = categoryBLL.getCategory();
            return listPro.ToArray();
        }
        [HttpGet]
        [Route("getAllProduct")]
        public IEnumerable<ProductBO> getgetAllProduct()
        {
            return productBLL.getProductAll().ToArray();
            
        }
        [HttpGet]
        [Route("getAllMapProtoCate")]
        public IEnumerable<ProductToCategoryBO> getAllMapProtoCate()
        {
            return mapProtoCate.getAllmappingProductCategory().ToArray();

        }
        [HttpGet]
        [Route("getAllBrand")]
        public IEnumerable<BrandBO> getAllBrand()
        {
            return brandBLL.getAllBrand().ToArray();

        }



    }
}
