import subprocess

def get_acr_credentials(APP_NAME):
    # Get Azure Container Registry credentials
    login_server_cmd = f"az acr show -n {APP_NAME} --query loginServer -o tsv"
    login_server = subprocess.check_output(login_server_cmd, shell=True).decode().strip()

    username_cmd = f"az acr credential show -n {APP_NAME} --query username -o tsv"
    username = subprocess.check_output(username_cmd, shell=True).decode().strip()

    password_cmd = f"az acr credential show -n {APP_NAME} --query passwords[0].value -o tsv"
    password = subprocess.check_output(password_cmd, shell=True).decode().strip()

    # Get Storage Account credentials
    storage_account_name_cmd = "az storage account list --query [0].name -o tsv"
    storage_account_name = subprocess.check_output(storage_account_name_cmd, shell=True).decode().strip()

    storage_access_key_cmd = f"az storage account keys list --account-name {storage_account_name} --query [0].value -o tsv"
    storage_access_key = subprocess.check_output(storage_access_key_cmd, shell=True).decode().strip()

    return login_server, username, password, storage_account_name, storage_access_key
