using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApplication1.Models;

namespace Myfip.Controllers
{
    public class ControlController : Controller
    {
        private readonly ILogger<ControlController> _logger;

        public ControlController(ILogger<ControlController> logger)
        {
            _logger = logger;
        }
        
        public IActionResult Control()
        {
            return View();
        }

        public IActionResult Bills()
        {
            return View();
        }

        public IActionResult Income()
        {
            return View();
        }

        public IActionResult Goals()
        {
            return View();
        }

        public IActionResult Info()
        {
            return View();
        }

        public IActionResult User()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
