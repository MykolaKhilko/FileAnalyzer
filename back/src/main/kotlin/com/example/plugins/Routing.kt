package com.example.plugins

import com.google.gson.JsonDeserializer
import com.google.gson.JsonElement
import files.FileFinder
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*

data class ProcessSettings(val path: String,
                           val names: String?,
                           val extensions: String?,
                           val keywords: String,
                           val id: Long)

fun Application.configureRouting() {

    routing {
        get("/api") {
            call.respondText("Hello World!")
        }
        get("/api/ProcessDirectoryTest"){
            val keys = listOf("Cthulhu", "truth", "death", "mad")
            FileFinder().processDirectory("C:\\Users\\Atolanin\\Desktop\\TestFileAnalyzer", keys)
        }
        post<ProcessSettings>("/api/start-process") { settings ->
            FileFinder().processDirectory(settings.path, settings.keywords.chunked(10))
            call.respond(HttpStatusCode.OK)
        }
    }
}
