.PHONY:
.SILENT:


push:
	git add .
	git commit -m "update"
	git push

start:
	bash start.sh