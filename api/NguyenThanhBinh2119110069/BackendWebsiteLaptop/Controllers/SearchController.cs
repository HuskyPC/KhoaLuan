using BLL.Product;
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

    public class SearchController : ControllerBase
    {
        //-- proc load all banner home
        [HttpGet]
        [Route("getSearchProduct")]
        public IEnumerable<ProductBO> getSearchProduct(String keySreach)
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listPro = objproduct.getSearchProduct(keySreach);
            if (listPro != null)
            {
                return listPro.ToArray();
            }
            return null;

        }
        [HttpGet]
        [Route("getSearchProductFREETEXT")]
        public IEnumerable<ProductBO> getSearchProductFREETEXT(String keySreach)
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listPro = objproduct.getSearchProductFREETEXT(keySreach);
            if (listPro != null)
            {
                return listPro.ToArray();
            }
            return null;

        }
        [HttpGet]
        [Route("getSearchProductLike")]
        public IEnumerable<ProductBO> getSearchProductLike(String keySreach)
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listPro = objproduct.getSearchProductLike(keySreach);
            if (listPro != null)
            {
                return listPro.ToArray();
            }
            return null;

        }
        [HttpGet]
        [Route("getSearchProductExact")]

        public IEnumerable<ProductBO> getSearchProductExact(String keySreach)
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listPro = objproduct.getSearchProductExact(keySreach);
            if (listPro != null)
            {
                return listPro.ToArray();
            }
            return null;

        }

    }
}
