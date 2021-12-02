
package com.codeclan.example.project_management_back_end;

import com.codeclan.example.project_management_back_end.models.Board;
import com.codeclan.example.project_management_back_end.models.Task;
import com.codeclan.example.project_management_back_end.models.TaskType;
import com.codeclan.example.project_management_back_end.repositories.BoardRepository;
import com.codeclan.example.project_management_back_end.repositories.TaskRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalTime;

@SpringBootTest
class ProjectManagementBackEndApplicationTests {

	@Autowired
	BoardRepository boardRepository;

	@Autowired
	TaskRepository taskRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createBoardAndSave(){
		Board testBoard1 = new Board("Test Board 1", "Test board comment 1..");
		boardRepository.save(testBoard1);
	}

	@Test
	public void createBoardAndTaskAndSave(){
		Board testBoard1 = new Board("Test Board 1", "Test board comment 1..");
		boardRepository.save(testBoard1);

		LocalDate dateTask1 = LocalDate.of(2021, 12, 1);
		LocalTime timeTask1 = LocalTime.of(12, 00);

		Task testTask1 = new Task(dateTask1, timeTask1, "Test task comment 1..", TaskType.LOW, testBoard1);
		taskRepository.save(testTask1);
	}
}
