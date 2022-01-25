package process

import files.FileFinder
import files.FileInfo
import files.FileReader
import java.nio.file.Files
import kotlin.io.path.Path

class ProcessWorker(private val settings: ProcessSettings) {

    private var filesProcessed: Int = 0
    var filesToProcess: Int = 1
    var timeStart: Long = 0
    var fileReader = FileReader(settings.keywords)
    var foundMatches = fileReader.found

    var results = mutableListOf<FileInfo>()

    fun validateSettings(): String{
        return if (Files.exists(Path(settings.path)))
            ""
        else
            "No files in directory"
    }

    fun startNewProcess(){
        val files = FileFinder().processDirectory(settings.path, settings.names, settings.extensions)

        timeStart = System.currentTimeMillis()
        filesToProcess = files.size

        files.forEachIndexed{index, file ->
            filesProcessed = index - 1
            results.add(fileReader.processFile(file))
        }
    }

    fun getProgress() : ProcessProgress{
        val percentage = (filesProcessed / filesToProcess) * 100
        val timeSpent = System.currentTimeMillis() - timeStart
        return ProcessProgress(percentage, filesProcessed, filesToProcess, timeSpent, foundMatches)
    }
}