from typing import Any

def temporary_chdir(new_dir) -> None: ...
def get_file_directory(): ...
def get_temp_directory(): ...
def get_themes_directory(theme_name: Any | None = ..., png: bool = ...): ...
def create_directory(directory): ...
