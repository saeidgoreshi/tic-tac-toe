using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using netcoreApiApp.Models;
using netcoreApiApp.Services;

namespace netcoreApiApp.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TicTacToeController : ControllerBase
    {

        private readonly ILogger<TicTacToeController> _logger;
        readonly ITicTacToeService _TicTacToeService;

        public TicTacToeController(ILogger<TicTacToeController> logger
            , ITicTacToeService TicTacToeService)
        {
            _TicTacToeService = TicTacToeService;
            _logger = logger;
            
        }

       
        [HttpGet]
        public async Task<ActionResult> TicTacToes(int? id)
        {
            List<TicTacToe> TicTacToes = null;
            try
            {
                var ticTacToes = await _TicTacToeService.TicTacToes(id);
                if (ticTacToes == null)
                    return NotFound();
                return Ok(ticTacToes);

            }
            catch (Exception ex) { _logger.Log(LogLevel.Error, ex.Message); return NoContent(); }
        }

        
       
    }
}
