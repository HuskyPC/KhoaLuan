using BLL.Category;
using BLL.Images;
using BLL.lib;
using BLL.Mapping;
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
        private ImagesBLL imagesBLL;
        private ProductToCategoryBLL proCateBLL;
        private ProductToImagesBLL proImgBLL;
        public ProductAdminController(IWebHostEnvironment _iwebHostEnvironment)
        {
            productBLL = new ProductBLL();
            imagesBLL = new ImagesBLL();
            proCateBLL = new ProductToCategoryBLL();
            proImgBLL = new ProductToImagesBLL();
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
                    if (objProduct.TH=="1")
                    {
                        objProduct.status = 1;
                    }
                    else objProduct.status = 0;
                    objProduct.ProductID = productBLL.getNewProductIDByStt(productBLL.getMaxSttProduct());
                    objProduct.slug = libBLL.ToUrlSlug(libBLL.RemoveUnicode(objProduct.name)) ;

                    //lấy tên ảnh 
                    string paths = Path.GetFileNameWithoutExtension(objProduct.slug+"-avatar" );
                    string extentions = Path.GetExtension(objProduct.file.FileName);

                    objProduct.avatar = objProduct.ProductID.ToString()+"-"+ paths + extentions;

                    var product = await productBLL.postCreateProductAdmin(objProduct);
                    //xu li avatar
                    string productID = productBLL.getProductIDbyMaxStt(productBLL.getMaxSttProduct());

                    if (objProduct.file != null)
                    {
                        var saveFile = await SaveFile(objProduct.file, objProduct.avatar.ToString());
                    }
                    //insert hinh
                    for(int a=0; a<objProduct.Files.Count; a++)
                    {
                        string newImagesID = imagesBLL.getNewImagesIDbySTT(imagesBLL.MaxSTTImages());
                        var saveFilesArr = await SaveArrImages(objProduct.Files[a], newImagesID, objProduct.slug, productID, a);



                    }    
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
        [NonAction]
        public async Task<bool> SaveArrImages(IFormFile formFile, string imagesID, string name, string productID, int stt)
        {
            //lấy tên ảnh 
            string paths = Path.GetFileNameWithoutExtension(name+ "-avatar");
            string extentions = Path.GetExtension(formFile.FileName);
            var avatar = productID + "-" + paths+stt.ToString() + extentions;
            imagesBLL.insertImages(imagesID, avatar);
            var saveFile = await SaveFile(formFile, avatar);
            return true;
        }
        [HttpGet]
        [Route("getCateCreatePro")]
        public IEnumerable<VMListCategory> getCateCreatePro() 
        {
            CategoryBLL objcate = new CategoryBLL();
            return objcate.getCateCreatePro();
        }
        
    }

}

