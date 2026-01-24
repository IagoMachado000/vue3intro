FROM node:20-bookworm

ARG UID=1000
ARG GID=1000

# Cria (ou reaproveita) grupo e usuário com UID/GID do host
RUN set -eux; \
    # se o GID já existir, pega o nome do grupo existente; senão cria nodeuser
    if getent group "${GID}" >/dev/null; then \
      GROUP_NAME="$(getent group "${GID}" | cut -d: -f1)"; \
    else \
      GROUP_NAME="nodeuser"; \
      groupadd -g "${GID}" "${GROUP_NAME}"; \
    fi; \
    \
    # se o UID já existir, pega o nome do usuário existente; senão cria nodeuser
    if getent passwd "${UID}" >/dev/null; then \
      USER_NAME="$(getent passwd "${UID}" | cut -d: -f1)"; \
    else \
      USER_NAME="nodeuser"; \
      useradd -m -u "${UID}" -g "${GROUP_NAME}" "${USER_NAME}"; \
    fi; \
    \
    echo "Using user=${USER_NAME} group=${GROUP_NAME} (uid=${UID} gid=${GID})"; \
    \
    # instala vue-cli
    npm install -g @vue/cli; \
    \
    # garante que /workspace existe e é gravável
    mkdir -p /workspace; \
    chown -R "${UID}:${GID}" /workspace

WORKDIR /workspace

# Por padrão, tenta usar o usuário do UID do host (ou o que já existir)
USER ${UID}

CMD ["bash"]
