using BLL.Banner;
using BO.Banner;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendWebsiteLaptop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BannerController : Controller
    {
        [HttpGet]
        [Route("/Banner/getBannerAll")]
        public IEnumerable<BannerBO> loadBannerAll()
        {
            BannerBLL objproduct = new BannerBLL();
            List<BannerBO> listBanner = objproduct.loadBannerAll();
            return listBanner.ToArray();
        }
    }
}
