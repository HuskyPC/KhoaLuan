using BLL.Category;
using BO.Category;
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
        public SanPhamController()
        {
            categoryBLL = new CategoryBLL();
        }
        [HttpGet]
        [Route("getCategory")]
        public IEnumerable<CategoryBO> getBrandAll()
        {

            List<CategoryBO> listPro = categoryBLL.getCategory();
            return listPro.ToArray();


        }

    }
}
