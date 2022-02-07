package files

data class FileInfo(
    val name: String,
    val path: String,
    val wordInfo: List<WordInfo>)
