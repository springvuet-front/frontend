<template>
    <div class="projectBox">
        <div class="project category">
            <div class="project field">{{project_field}}</div>
            <div class="project myPart">{{project_mypart}}</div>
        </div>
        <div class="project info">
            <div class="project name">{{project_name}}</div>
            <div class="project team">팀: {{project_team}}</div>
            <div class="project date start">시작일: {{project_date_start}}</div>
            <div class="project date end">마감일: {{project_date_end}}</div>
        </div>
    </div>
</template>
<style>
.projectBox {
    width: 150px;
    height: 150px;
    background-color: #D2DAFF;
    border-radius: 5px;
    display: block;
    font-size: 12pt;
    margin: 20px;
}
.projectBox:hover{
    box-shadow: 7px 7px rgba(0,0,0,0.25);
}
.project.category {
    width: 150px;
    height: 50px;
    display: flex;
}
.project.field {
    border-radius: 50%;
    background-color: #B1B2FF;
    margin-top: 10px;
    margin-left: 10px;
    width: auto;
    min-width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
}
.project.myPart {
    border-radius: 10px;
    border: solid;
    border-color: #B1B2FF;
    width: auto;
    min-width: 27px;
    height: 27px;
    text-align: center;
    line-height: 27px;
    margin-top: 10px;
    margin-left: 10px;
}
.project.info{
    width: 150px;
    height: 100px;
    align-content:center;
    background-color: #B1B2FF;
    border-radius: 5px;
    font-size: 9pt;
    text-indent: 7px;
    line-height:1.5;
    color: white;
}
.project.name{
    font-size: 14pt;
    line-height:1.1;
    font-weight: bold;
    padding-top: 5px;
}
.project.team{
    font-size: 10pt;
    font-weight: medium;
}

</style>
<script>
export default {
  name: 'ProjectBox',
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      project_field: this.data.project_field,
      project_mypart: this.data.project_mypart,
      project_name: this.data.project_name,
      project_team: this.data.project_team,
      project_date_start: this.data.project_date_start,
      project_date_end: this.data.project_date_end
    };
  },
}
</script>