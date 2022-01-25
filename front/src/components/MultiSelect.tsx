import {Autocomplete, AutocompleteProps, Chip, TextField} from "@mui/material";
import * as React from "react";
import {AutocompleteValue} from "@mui/base/AutocompleteUnstyled/useAutocomplete";

interface Props {
    label: string;
    values: string[];
    onChange: (values: string[]) => void;
    options?: string[];
}

export default function MultiSelect({onChange, label, values, options}: Props) {
    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            freeSolo
            value={values}
            onChange={(_, value) => onChange(value)}
            renderTags={(value: string[], getTagProps) => {
                    return value.map((option: string, index: number) => (
                        <Chip variant="outlined" label={option} {...getTagProps({index})} sx={{
                            color: "white"
                        }}/>
                    ))
                }
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label={label}
                    sx={{
                        color: "white",
                    }}
                />
            )}
            options={options ?? []}
        />)
}