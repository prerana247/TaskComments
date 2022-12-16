using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Threading;
using Microsoft.AspNetCore.StaticFiles;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentsController : ControllerBase
    {
        private readonly CGDbContext _context;
        private static IWebHostEnvironment _webHostEnvironment;
        public DocumentsController(CGDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        // GET: api/Documents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Documents>>> GetDocuments()
        {
            return await _context.Documents.ToListAsync();
        }

        // GET: api/Documents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Documents>> GetDocuments(int id)
        {
            var documents = await _context.Documents.FindAsync(id);

            if (documents == null)
            {
                return NotFound();
            }

            return documents;
        }

        // PUT: api/Documents/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocuments(int id, Documents documents)
        {
            if (id != documents.DocumentId)
            {
                return BadRequest();
            }

            _context.Entry(documents).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DocumentsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Documents
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Documents>> PostDocuments(Documents documents)
        {
            _context.Documents.Add(documents);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDocuments", new { id = documents.DocumentId }, documents);
        }

        // DELETE: api/Documents/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Documents>> DeleteDocuments(int id)
        {
            var documents = await _context.Documents.FindAsync(id);
            if (documents == null)
            {
                return NotFound();
            }

            _context.Documents.Remove(documents);
            await _context.SaveChangesAsync();

            return documents;
        }

        private bool DocumentsExists(int id)
        {
            return _context.Documents.Any(e => e.DocumentId == id);
        }


        private async Task<string> WriteFile(IFormFile file, string f_name)
        {
            string fileName = f_name;
            try
            {
                var extension = "." + file.FileName.Split('.')[file.FileName.Split('.').Length - 1];
                fileName = fileName + extension;
                var pathBuilt = Path.Combine(Directory.GetCurrentDirectory(), "Upload\\files");
                if (!Directory.Exists(pathBuilt))
                {
                    Directory.CreateDirectory(pathBuilt);
                }
                var path = Path.Combine(Directory.GetCurrentDirectory(), "Upload\\files",
                   fileName);
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
            return fileName;
        }


        [HttpPost]
        [Route("SaveFile")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UploadFile(IFormFile file, string f_name, CancellationToken cancellationToken)
        {

            var result = await WriteFile(file, f_name);


            return Ok(result);
        }

        [HttpGet("DownloadFile")]
        public async Task<ActionResult> DownloadFile(string NameFile)
        {
            // ... code for validation and get the file
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Upload\\files",
                   NameFile);
            var provider = new FileExtensionContentTypeProvider();
            if (!provider.TryGetContentType(filePath, out var contentType))
            {
                contentType = "application/octet-stream";
            }

            var bytes = await System.IO.File.ReadAllBytesAsync(filePath);
            return File(bytes, contentType, Path.GetFileName(filePath));
        }

    }
}
    
