using BLL.Category;
using BLL.lib;
using BLL.Product;
using BO.Category;
using BO.Product;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BackendWebsiteLaptop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductAdminController : ControllerBase
    {
        private ProductBLL productBLL;
        private IWebHostEnvironment iwebHostEnvironment;
        public ProductAdminController(IWebHostEnvironment _iwebHostEnvironment)
        {
            productBLL = new ProductBLL();
            this.iwebHostEnvironment = _iwebHostEnvironment;
        }
        [NonAction]
        public async Task<bool> SaveFile(IFormFile file, string imgName)
        {
            var imagePath = Path.Combine(iwebHostEnvironment.ContentRootPath, "Photos", imgName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            return true;
        }
        [HttpPost]
        [Route("postCreateProductAdmin")]
        public async Task<IActionResult> postCreateProductAdmin([FromForm]ProductBO objProduct)
        {
            if (ModelState.IsValid && objProduct != null )
            {
                try
                {
                    LibaryBLL libBLL = new LibaryBLL();
                    //objProduct.status = Int32.Parse(objProduct.TH.ToString());
                    objProduct.ProductID = productBLL.getNewProductIDByStt(productBLL.getMaxSttProduct());
                    objProduct.slug = libBLL.ToUrlSlug(libBLL.RemoveUnicode(objProduct.name)) ;
                    //lấy tên ảnh 
                    string paths = Path.GetFileNameWithoutExtension(objProduct.slug+"-avatar" );
                    string extentions = Path.GetExtension(objProduct.file.FileName);

                    objProduct.avatar = objProduct.ProductID.ToString()+"-"+ paths + extentions;

                    var product = await productBLL.postCreateProductAdmin(objProduct);
                    //xu li avatar
                    //string productID = productBLL.getProductIDbyMaxStt(productBLL.getMaxSttProduct());

                    //if (objProduct.file != null)
                    //{
                    //    var saveFile = await SaveFile(objProduct.file, objProduct.avatar.ToString());
                    //}
                    return StatusCode(StatusCodes.Status201Created);

                }
                catch
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpGet]
        [Route("getCateCreatePro")]
        public IEnumerable<CategoryBO> getCateCreatePro() 
        {
            CategoryBLL objcate = new CategoryBLL();
            return objcate.getCateCreatePro();
        }
    }

}

