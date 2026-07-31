# Publicação futura — bloqueada até aprovação manual

O repositório deve permanecer privado durante implementação e revisão. O GitHub Pages não deve ser ativado antes da aprovação expressa do proprietário.

Após aprovação:

1. Revise novamente arquivos e histórico Git conforme `SECURITY.md`.
2. Torne `Ylaros/Ylaros.github.io` público manualmente em **Settings → General → Danger Zone**.
3. Copie `docs/pages-workflow.yml.example` para `.github/workflows/pages.yml`.
4. Em **Settings → Pages**, selecione **GitHub Actions** como fonte.
5. Execute o workflow manualmente e valide a URL publicada.
6. Faça uma nova verificação de dados privados antes de divulgar o endereço.

Não há domínio próprio configurado.
