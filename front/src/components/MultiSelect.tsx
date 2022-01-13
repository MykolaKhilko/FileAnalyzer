import {Autocomplete, Chip, TextField} from "@mui/material";

export default function MultiSelect(opts: string[], defVal: string, label: string){
    return(
    <Autocomplete
        multiple
        id="tags-outlined"
        options={opts}
        freeSolo
        renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
        }
        renderInput={(params) => (
            <TextField
                {...params}
                variant="filled" // "standard"
                label={label}
            />
        )}
    />)
}