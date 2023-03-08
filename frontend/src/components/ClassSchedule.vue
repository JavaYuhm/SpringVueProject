<template>
  <div>
    <h1>Class Schedule</h1>
    <table>
      <thead>
      <tr>
        <th></th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
        <td>{{ row.time }}</td>
        <td v-for="(cell, cellIndex) in row.cells" :key="cellIndex">
          <ClassScheduleCell :cellData="cell" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ClassScheduleCell from "./ClassScheduleCell.vue";

export default {
  name: "ClassSchedule",
  components: {
    ClassScheduleCell,
  },
  props: {
    scheduleData: {
      type: Array,
      required: true,
    },
  },
  computed: {
    tableData() {
      // 시간대별로 스케줄 데이터를 나눠서 배열에 담기
      const timeSlots = Array.from({ length: 15 }, (v, i) => i + 9);
      const dataByTime = timeSlots.map((time) => {
        return {
          time: `${time}:00`,
          cells: this.scheduleData.filter((item) => item.time === time),
        };
      });

      return dataByTime;
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

table th {
  background-color: #eee;
}

table td .title {
  font-weight: bold;
  margin-bottom: 5px;
}

table td .teacher {
  font-size: 0.8em;
  color: #666;
}

table td .room {
  font-size: 0.8em;
  color: #666;
  margin-top: 5px;
}
</style>