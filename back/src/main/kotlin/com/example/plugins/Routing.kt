package com.example.plugins

import files.FileFinder
import files.KeywordInfo
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*

fun Application.configureRouting() {

    routing {
        get("/") {
            call.respondText("Hello World!")
        }
        get("/ProcessDirectoryTest"){
            val keys = emptyList<KeywordInfo>().toMutableList()
            keys.add(KeywordInfo("Cthulhu"))
            keys.add(KeywordInfo("truth"))
            keys.add(KeywordInfo("death"))
            keys.add(KeywordInfo("mad"))

            FileFinder().processDirectory("C:\\Users\\Atolanin\\Desktop\\TestFileAnalyzer", keys)
        }
    }
}
