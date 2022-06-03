using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApiCrud.DTOs;
using WebApiCrud.Models;
using WebApiCrud.Repositories.Interfaces;

namespace WebApiCrud.Controllers
{
    [ApiController]
    [Route("api/v1")]
    public class ToDoController : ControllerBase
    {
        private readonly IToDoRepository _todo;

        public ToDoController(IToDoRepository todo)
        {
            _todo = todo;
        }

        [HttpGet("todos")]
        public async Task<IActionResult> GetAll(){
            try
            {
                var todos = await _todo.GetAllAsync();
                return Ok(todos);
            }
            catch (System.Exception ex)
            {
                
                return StatusCode(500, new {
                    error= true,
                    message = ex.Message
                });
            }
        }

        [HttpPost("todos")]
        public async Task<IActionResult> Create(CreateToDoDto request){
          var todo = new ToDo() { Description = request.Description };
          var newTodo = _todo.CreateAsync(todo);
          return Ok(newTodo);
        }

        [HttpPut("todos")]
        public async Task<IActionResult> Update(ToDo request){

            try
            {
                var updateToDo = await _todo.UpdateAsync(request);

                return Ok(updateToDo);
            }
            catch (Exception ex)
            {

                return BadRequest( new
                {
                    error = true,
                    message = ex.Message
                });
            }

        }

        [HttpDelete("todos/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            try
            {
                await _todo.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(new
                {
                    error = true,
                    message = ex.Message
                });
            }
            
        }
    }


}