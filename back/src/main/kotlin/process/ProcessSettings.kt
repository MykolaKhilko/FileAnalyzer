package process

data class ProcessSettings(
    val path: String,
    val names: List<String>?,
    val extensions: List<String>?,
    val keywords: List<String>,
    val id: Long
)
